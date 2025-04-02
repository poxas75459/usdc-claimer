/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "4EGZ1wwBDNLsGk9Tb6aGPfLV4LSNzJW1yhyBm8tJKTM63moo4ye7s4Az8dP6uHdujFFNvLBeJwdL8VWfiL4pMSLm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JXFPaWLs3ZmzUQyFfSHviKvxxqGNuGLUwWRvx8ZbsboP3kkxcjxU8kUvmHqAbjJiUVCzZfFNyEq5Y4HaV1aNdAo",
  "key1": "3CRhjGQQMGjk2kvknd8iU6a6LepGFjT6hhRXbf6NPcMEGVETuJMTmsbYLSLGVy7Cb941i1qFF7Wev11C8U2Fbso4",
  "key2": "4SoMQ7BPPjrqa3zW2sEZCU7KRixJYVbz9kV5g3N8DW9L4cJRS8A7eNLuakfVCgpx5QfzH2tjLEpnPnbHGifkPe6h",
  "key3": "2LQeEVDuJeWVehkA8BnJ48ukL2cDNG82TAa772jHnvLF6qA2eaUeVx18T57WKMQRPKHhW2Br1bqKYxyBhr1Phxmg",
  "key4": "25WPJFgbq64tdT2z5inpiqfZ5WH8LYXHHKpQK1j1P2cYZnwygxKyDnPFNYFfgJ6XrDhJLnaUef9DLGHKeBzJ99qQ",
  "key5": "5yLbj1SHtSyEobh1RUDLgQg9BXQxsBAoCiKJiCZARViWeQcu5yRtuRzYDRdUx2cqENGg8CwfJpXREs3RLDtrgyCp",
  "key6": "5WNfoCSd9DsECAzyyMVbiDYoiUC7tLfHwFuDdH736fH5dNy5tJYWuiAJtq3WvueMwf2kbGzepWzqyc2PKxkRLm4d",
  "key7": "oumRkXmH25Hpzu6VHCgzxvWwGpBAYiochELE3ZDP6bWhmWuJBRnrr8wG11T1Qi6281nJvUTWprSJ2ThVEEyyrKe",
  "key8": "4CrJb3HbKs4cSu9CJPL3A7JbgFvjRgzKAZVR9hgiWCzaf7JprciSnu6WtHCD8MMhPXMfNnqTAfVqakzL9pbkPWpG",
  "key9": "5DZG1BVbfyfRTEkQHLiWxDfsBAxHC7wLAGV46RPxrADVixoD4Cf6qNtksjRuoQzfTsTP7xRsjioV1TJRUuNTxKS2",
  "key10": "2DWEZtbZJVPByHvoHUUuDYtc8aViv4NYzCceyN7SvVkHEqPyHZmwyWzJ9hvZL8zqbukM4J8wBTCrhTw5g4KcWkU",
  "key11": "5wU3Te7yzaTrsZL9mbjH2v91azBqfJsdbqziU9QSwngJu1p5x6uM67r27s6CAP2f8k8jmmnShfpiNg3FceXBaGS4",
  "key12": "3Mb6bL96kBT4KUrc2VY4fPV3bHLJrmkkWszeX2iorZgeqnc5qZwe7hPZDdQuuaMgrHUnwnKXJFPdNw4cWHPVGaCD",
  "key13": "i86fuPvKvTNFoX2cmyicpMCeZHj5Lu9JCaLu2yCiMbrutsbXkhWWF5dcWoL2ReFN2zAKJBnUQpoq7EnLSSYwoRh",
  "key14": "4iYXNBKiPdNs5SoNEhyZxujovNFQY3i9d5coZDeUF67VERMFoXWZ4BJSDCmhY1r69eFR47mf41whJtG9akssoQLD",
  "key15": "58tFwna2A3oEmEqi6w68n8jHC4ieQVDssic8SL486tvUQxiTmhfR1KZG7qwj2muDLFXrBq9gFekEJVPD9uGLN8H7",
  "key16": "4zbBDu6YoJMUZWyEsYWS6cuytKYRk9u56xLfmW1EsjwoQiEPSUvWwEc9bAYXvDxwaQizwE7twtAYaDZxv7gPx7Mr",
  "key17": "4GQHo7AxnYaK1zx3Ri1QJ25PouqTv8XX97MdmpFvAenPvfHX9rQKmseTEDTLLKvhoriJvmwjhhnDSLDNNRHHLHPm",
  "key18": "674DV94jMNVEDweoxH7g8fGGpC5ZdLs5QyxC1LYP9fKiA6R9JZHc8rSkhhChSbSSnpBWs1fJ5faFqa1AM7QxNAMR",
  "key19": "3GoBLdrUH78SpLxrpW1czTtsoq7dZLLEgAYLAJ8YTVsCVbvaLYiiBVkHtVDwttp6J1boU4ML64KtJpcbt5PBsu8Q",
  "key20": "FfY1RJ9yNAikrxAJYZPi2QpwHca5zkyZasHVMZYcMCtiE6Hy1bFNob1xwqzjug2wZDN58WHLD1mV55iBezcYvUN",
  "key21": "27pefEzyPPmbaqbRATgrMksejemvp1CmbnyFgBYsEBravujQUQo5RidLrcykUGy4nSZB9osQDAv5QjUxHRf6t3SC",
  "key22": "5Ze2KYrs4HE5BaxnTpPQvjLKvVjkL7V1fuz8rKgpMemV6LMX2WXZczsTKbgZJqRvhGFouDGGLqBATWX4JcHHcFyM",
  "key23": "2Sk84EVRcfccH8FHPQSJqLh382zWiCDS6gHvFFvMHm5FS7G1XX96zVhMLU2PVg68FdAaz6z4PG25Yv4sBBM9bDq8",
  "key24": "3P2FQeYmkeMFuVvhkQdt5K82yRhYU4BBFsaC1BDu7krFTGAcHGuya3jihnULKPYfUzNcbFLGGaXi3dQnYNU8e4qc",
  "key25": "3gbC1xJWEAMTs9tFCSnA5UgE4TGV244QfEijV1S1euZJkydJ2M9gta1c2ZXNUNw43Gvc1Mmmn1VcsCrNZCbDtDYi",
  "key26": "SAAzamBo1H56RpN5QfULNSYbbacoo4p67R4fwqLcL1saQ6o51foaFhzHNdG9UyvseHLd3QuL4EPXQap6Ry7ZH3k"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
