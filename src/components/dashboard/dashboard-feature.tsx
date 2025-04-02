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
    "2BfSWK68zCfFnibau1uyD5TF9ZH9HX5pKv8x2NjdJWKy2XT3giG8uDft4CmXBEQeNH6PZceio9ouC34ZPk1EpayN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x6TuomFFBfoGP2Uhc6Fk9RN8xamTsb2p3kHBeLiJnDfWcSd4wmePF52bdUDQFRbwMXxYzMJToeEtHUVGfpfX1Ro",
  "key1": "jZ3RtgRyLXBZdbsGJn5CTtqmGNK5sFAKkyBLfgPTxKaPUDTFWwgwPRF4bPza4e1LKwUDi9vQ8ry2dJTFvt7GVP3",
  "key2": "2DNqYmG2xHezrFkEwHpzomuVsoZQVZcJjRL6Z9N2yqKV6RzC4QMJGjaXHsNxjgefDJYHuftoWtZojci24K5PcRhx",
  "key3": "5jw1rxoHqRS7umYKkbTsVNsohvTJLZE7iiemfh2268bB7kJtMj8LJrm2X6SPLZT5ZrpfHyTBnrQEZtfXdehDfDuJ",
  "key4": "4Jr1e5UbAjbfb3Crz7X7TcPGgr7GB49a7xV3ef16V5uhqbwjL6oywfZmSqr8AvNsB2MgDyxM7QsYxxjNPwEBRE3Z",
  "key5": "3CzfgmAbbfbMvdjZfvVNtjCXDmbHMGV3DL6RcB4h2x1dAs4e8rzyVf3n5uud25VzDux1bfGuVmCAptdPZTjkG6N1",
  "key6": "hfYShGcTbZXz35qC1oJqnzkqVfMvH8aBpvanYzrTXTk8rEsTN3AG6LT7mBoZt3LfDWjs3j5osVAoRpP6PTanvHi",
  "key7": "7Bzfxh89mUb2ocxxNd2dnu3k7TE7QmQHeYzQGaJC8WYfF3kMogFYY7UXkf8GKy45S37ousJeY9cNz45FDqfXnyS",
  "key8": "27Ujn8L95s8vDujxQYWyWezUv9oMpH5hSc4iHJFq6XQMTpYJvYoY8CZRp3Wsji4JNu3oCDVoJuNejGmdkrmjYp1d",
  "key9": "4aWZwfm3FasykV4Yp8cgSxARXoXJ499zNpK9eUibiRRf9BZgnYihG7SjmqzuPnyf4iUTxj1zDnDftLRaDK6fRGSY",
  "key10": "5vmcNuK2Hs7id7kb5uGNYtXQeSo8JWXtQeQvZZ1npYDFrPkEc5pgLAw1UmhQqvhVgwALF5FQdsMQC57MTZ23151H",
  "key11": "GrzuShezo1rv4bW5weZ5QMx7C8UnB6qthwZeoMThPWeswZP7w31JfWfcEcLPzyco7sEmc3GQQXuaVbaaKc8mAjx",
  "key12": "25wJwqp3yBDZRa8shyprV6irqg2Ti53RQmBRh9QUb9SjaZdejuFVgmDSUZpmt3NsFk1XrYf38wmVq78yv7YyZMJZ",
  "key13": "44kGJZAGoP8CmEbBzQ49itmN6EtjCLHwg66fYZ5rwFTHzUDLsJd49SSqYBh61cR5jjJMaZmNX7f6Roj3naUAL627",
  "key14": "3T69co3ukfeFRB84gCqbxugbTQtssbUyWdyqQfWUFSRZNKJJQmsPV5FEStM5uA6Ymkm4tqYmRKQno1b9BeQB9BTQ",
  "key15": "64AEYUC8RUs1Dnn9D36qc9HkSK2MytAY8SxcWeFPPEofy6CJURGgRnA4JMkCVFGdEjdHP2prsEZLXtH538cvXoDr",
  "key16": "4w1ib57xQ6DYHaq7LQ6t4ctavjo8nTekjTyxeZgEUfHgCYdoHuH5BrZim37HLyVPpBEnyVV5ZABXUDNJZxGSdmGL",
  "key17": "45oe3LT5NZxmoJSuykoxaiZAMg1B7mpvWz7W11FTz91CKhaFwNz1atbZivs6kicVj6PTmx8AbqRee9ZQpSKCNDbj",
  "key18": "3fGwNXQ5LpBkZYM5dN9QyaMr6sRXwyqscjoSV7u7iTXuQpwuZEzMVqc1rDs6jFMyYa7CwRVfd45YaSaL7nwffNY2",
  "key19": "59ChvcCEh7MeEuWJZawv5Cs5uPS8eQicXj76YfAYuwkvWHywANniqmTGxuub7UkHK4i5z6purmreyzpESsGcwLaK",
  "key20": "2r2knJkrUKnBe8us7NxdaUyadqNdHGpwx3pusqM1AvMbFqdrPRDVKCKu8zmqtRywcFpTPotHvjUfTkXcRURyovDT",
  "key21": "55Uv9ucAJmdnmGN4y6Qtu2Ai8TreVrrj9MdXuMxcXo8fe9gQv4p1myHCyESPFn4uiN6X2adcR4bwZ4Fsz64EoGPh",
  "key22": "3Bnt1k3cTKcyPUeuZxoCBbfjbByV9SHbgPWF6fZz2oKRSMCh7GVS1nkJQLsgU2M2LCnYaV4CAKaB5LFmLYS5JTEm",
  "key23": "4uzj2T82CsZ1MuRL1qeanwWjY81tMFsFm5cKcSvcFS1RJhFW9htFr8DHUni6X2N7FLoRSCGY5ptkVBCusMa6XGNm",
  "key24": "4XdWRf4zv1pSvodtf8rdngaypJkhTTDUrDCTtSAuUTCqYshUUJ5AFnrPbHyqWhXSDLz6jmJCAd5AoVRzmrEuCZo9",
  "key25": "2cUGoRFTBP766hNLbpCWu6B3wCpF1yd24N4fQAtANQjQX8gysNtXB58ZssJzkFXD1uwxfXa2uNtKAyaZRw2AAFWK",
  "key26": "5TMMRC6Nzhm8tXsprQmyFE7PPr3j9Ham1p3ZG9akBYMJfSAVfxp7cJ3ATujExE4qDoCkHC1GQ1z61vbYoHpXVxit"
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
