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
    "4GQhoRWQVydUzsyCBVp7FpeiSiv7vTThghBaxXjAhhNdsvukrLeYuSDdg4Rhyo7gVRBupsVegapJL2BVDTB3Q91i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R653fSTkoxMWDxBTULeTbNT1eTHGN5NRD4mvwhq96j47LSgEDzxkby1npW52nEH2jW4i1a3uxtoaQv9A7FnWT7e",
  "key1": "NkUimuA9kqFA3b1as82gPZJXTpDa8MhTQmTdxoiLCSUYAe2BGNMxFGyQKapgtsyujjAyxGQrfNR8eqx6edVfFUV",
  "key2": "2LsVg2uR3trfSHp8btj8p69wTadT8KPgQ8ZosWXd8PyWbbqzVDFWAh7tJfQTaubrpG3CmxHuBJE5S7Gac64vH3B5",
  "key3": "4rDw6CL7u6yfxVFw1xRV6rXES8GHMKaKBgVnvvMrHjC2qNwAYaoyWzaKPVx2PheNXS7LGJcfftcJ7b3g5HQ5STBz",
  "key4": "FQfR6mHtbA3yBUMCiHcUmaktBwxQApHGsRmY3ktFnDBmHSD2fNtb3AtFbxFTYaNFUmTr6wgdPFdV4g5BRKDi6Kk",
  "key5": "5egX7e4kok3txb6CY3CaGrPSSLHhq5JmAdYtR7gNCdFa7sCMVjwC3iRqDPNBZfJrbtJQHxua7uauNXPr391v94sY",
  "key6": "NaYKb6q1ZUrEGwTfTLpokNGHVLTtPW7qc3FeTmqJfiDUC1NtksqtoVBy93z1xQh8Q6Cn951E7a6WiJzeE5FX4Be",
  "key7": "3Lt5XmP1oSJUx2SyjiHfZCaonVMNn5YQTFGTMVh6YFFfjsKUGNztAqbxK9qaNECzA1DKuHoUsVrz8UUrWe9yFWmJ",
  "key8": "5c9xzad2C5pxU4FQa5x3ryqnTZtPT2SStQNyeTPJKYUjtxAmFRcQb8XLQBMceW5Ao2TqoHocskHsXm94ScvmArZD",
  "key9": "5yKKJzTRxxfBFFk396mT9v5HndJnmTygn1gM4psi94Npi7WaGNEdnBM1uCBsQjMpdkztttomiNMnALxiLCmGXSEn",
  "key10": "5wbaXFUDYEwG3tvZ6wZCiqyWnxW4SV1hZ5sdehG8LezQKDKYkcJYUtdx5UXLZgyR3Dh8i7cRopq51XrrH3LWLRdm",
  "key11": "5PNHGvfGENULFa6YgRKbZCBE457GbY3JuHpaEwJQW9S91KuH9EcVNFULrGRY8zjoPy1jqiv49CdSBmTna7mfj27C",
  "key12": "3LA6xRiDmbZKEv6opJyC3PGUqBMba6soWwXbeKEEmRqvm9Z4gV7zvGCLGJRfUtXqhihBV7zc2HVpg8u5QZMN7skD",
  "key13": "55wXbPXA8ob15QBoWxKvbHQ9yudJdfMVvp9Cd7xuo1QSLaVyubSMiFBZfTq7BuZ4wweJBLJ65xoDY9y7GyKg6r7w",
  "key14": "4QLMXuzPsyMa4m3SaUcmpABeNt6e3HUNqDqowyaf1q2VkhYySuPdNwuMQnMwDWd7aacRJGqvnUCt26tBeCWpD8Ts",
  "key15": "3kFKNVW5hyejpfPGmbgRwqoz5KiUPeDW8hn5UUjFxXjf3wxHhjFhx7FAYLjpnsK6cvdLZDApWXPTkoaJMpX84EFM",
  "key16": "2KcyQtrZ46eWcVbyZeWmZAtUw7iUAt42vz71AgHGBMbc9pmWQGavj8FS6TsdKkSrPyujVdxdmbv27j3aUT7quqsW",
  "key17": "4KFVTWqfNveuxNoErddDYbaBxYAKW1ERjuHrAyFQdgQ4coewgZLw9F8pjGXCP7zf4rAQM73TWEzWpNDPUmTbQuns",
  "key18": "4YAd6DuGQUsNWT5MXP6iUyqMpPxBzTePaLNr19Px9chrfdiA2yYs4jUL95wVmyDkVkQfuzpqGKV333EyvZBiTz5T",
  "key19": "4FEjVjYxsnNZsmJY7sihMJwCZu2SzGh3BvZHgs888Q6YDSYi5A7Kb2zgdTvCuV5ZxpMC2gCXvQB3JExG1HybB2CZ",
  "key20": "2H5vQhPpggWPu3N6Tq4WJvNDpWnxFnhtfWWyvoSwfYgR7Kt22MYVipNubGqsUaMvsyeNDEtNgJtqL3YHiG6PvQbD",
  "key21": "Pbt5eVCkeACRahpKqFLADnEfhJjTdyTws3sfrNGDrkff2RJ5FdYfAbe4QYDSpGtyMKvSzpzW8gLkMTftVWULod1",
  "key22": "2aDk1Qz2f93gv6cKCCK1qRKi8g5pnJEhUPRtnYkc79mHZJbAxtKkFH5HHrbH4hBfnoahHjn3q6rHimEYGJsovxTz",
  "key23": "5ZXNS8Zrz1duEfj7MeZJYFm1kh3m55jxasT13X8B3hEZo1JkDCsk2BiaEm4pU7Bw9zgRihyDFyrTLSgw9LMePy5i",
  "key24": "2agNByXoMCpH97fCT98xjQiAx9eeJapnQFZt3s8s8nR1jH4hmQKPGchBXCHYezXKCtbxJByLaEg65fMKN92XWLgR"
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
