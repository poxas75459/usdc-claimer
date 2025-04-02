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
    "5JYoSxLvT8p9FEYrPUyfYWH76RZ5gPFSMQ2PaAqsSXcj9CKU42DYY9e62Cwc3BSSoLZbM8yEFB2RSZ5kTjcvcEnv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TRFSey9YR71XWUsaSG8SF3ABhUwnJgBR3bEkbQgLMtV2twAD9tkZ8mcU6Amb1YNf2wgxY5noqovei6V7CkCALk8",
  "key1": "5o4W5kEsZpMKNqYcnj24LAj8FNrWFni92oCoRXKQ64XtR8TE9jJrdso9hyMWoqRM1Js7Jsr93tvU4qm7m8r9Ls4t",
  "key2": "gahWkSsPfup4PZsUEKbbxKvVEVxZtGiCTYSHzTM1oPb7jJ2uFWqTgLTZZ3ze9BzaSSVnEarq1v4iQ97uQVxAr6D",
  "key3": "3jEe5juzsuM85FcM8jfJQAjZZhbTozE12hAEak91HjpxT8GotAkzyBDH1qevuw4S8BTCviMEVYXAnoEw8AYv67T2",
  "key4": "cAB2XdPiNUymDGVUNwP2CL9HPaygs7atqRhcQ4cpQs3MWk278CL48KoZWw9ma42TSkfeHex3kxStNsE2tWpn5mv",
  "key5": "59unyGfMKEdMAe13nCwxHdLqpx7eaLW6W9HTgS14pQmiE1iJMHFcpYGDtRzS8rndPs8SsmXZ6gokTAPzZLDShNrG",
  "key6": "hMYbosZcYLRDiPKzjaqxfwR9RDaAc89R7VYgeYuAia3wMKfGfu1TGTFPU8QgqJx3KtX2VR4rG9FYb4qzcYZAEVd",
  "key7": "5JkSY9Lxti2AHyDsi7iRKDPBjyEBNBdx9h8pQt6WALiVwCk5efVGFLTVC4o9NwHnzJiPWpGDUinkbHsxUeRnBbwC",
  "key8": "5zqCB9aVyegCja35x3xfC5J8APvWRkZc3GuYAJhTS1SKnbSRHPX5M6PEjoZZkchJX5bQq37iXJSamnF5KN8k5ajf",
  "key9": "6nvg9Arusm2baNmeX7cA23fygaYTxdqs6fZVuGqY8XctE2k9HARganc7yRsN91mAgqMUg5zkrpiMpTCFLSoCzA6",
  "key10": "5KijF6D5qdPy3d5nmdgE7vB661vcZp1cXHBxgwLjXxxjKNTDjPe7pm4PhtmdhpbHvpgT5CNSNnjygc8gTy4akD1U",
  "key11": "2xv7H8CeYpMpDyayjj2qEpbzhKQ1Y91e6hGftgpgCGG9GPbqAEAsjaTDaR6sEA2xiizh3aDW16LGWuR9ZdR8Gx2h",
  "key12": "4Xc2SSKmX8WaPjvCVxUuvSfCTvqKgUcqMV239BSwvxJJ3mAjxQWH2GhdaznCcNaH8g8KoYPpcsbnyhhqjmzMbBXw",
  "key13": "2W7H9JUY53X4mtHjFsobDYbF5YQebKwAU4hDadfVPzucaNumE31REWWaFVLk2pnom2QKiJBm45ZeDtaxmPNTXGJ7",
  "key14": "3vtymXojFEyTvUUibJUBnLmEM4tw1kdEARvaCxRsFVGkVmvtVvNpvpPpu5Q7NjsWsHrfZxM3BvCnSUShCWL1Zj3q",
  "key15": "MXDWMPE2yJXkvSVQ3KkVnFHAJu4nDZarbCnTVffaFMLgAD6uUSEkLfUDqzUJEDurZfqt29HiacGGTcmTCr6korK",
  "key16": "5y8RorKExtwb8uijqb5h8G7n86pVcbZrzvmBZm1bZSJdy1YnWcW8rSPnLvY5d2UgDThRWPccMrECGeTMBD5ejJPW",
  "key17": "2LTUkF5czLavitLEDk9Nm2Ucdzin3dc46cW2M8cXWJj9uL2uFofx4RgPU5iSxfBGKjWCgSyv15Pwnx4pqzGZ6zvw",
  "key18": "4jjQwfPfpbpMvNobsnMe4oqwg6w24tzvGuzXihDckZS57fPC6984EbqPk3Ex1YbxucTp2jNHBGd6z4JCjLW9zkSx",
  "key19": "2EQLtRRsW7HATkSfFDydCSTT93eUaBaVmU2QmYgUDrMxu9vfwqn3UdX9yMpLBBRGBvE7w4Yu93cVYFm2kYaXGPDv",
  "key20": "45nw538v76fzEPG2W3TUPD5Mp5VWXoGzUeSNfwYevCFf7aRKT6PPiRbmPszNVFTEf1c3skQDCNcsstHgDYQ4AdoR",
  "key21": "44n19rX7g3pLoPkc3iGrMXBdxuMpVozW3KvPRs8xTRNCBDGb14GkWaYaEo63SRDjZgkMZz7jotR4BrHuwf9pG1aF",
  "key22": "22Z4xTU2fMcjYPWCHwDSUjAmVW5cNmmV9GqyG9R4zVwJnbiwfkNNtELpCUMf3os4qM2L3ZZEQaT8GBZMwT93efgA",
  "key23": "57yuUEmFRjT9zUL4uNT9qJ3UcvUmzybrih1oSthbDPPfaU919djSMubs9VJxrXvrZvqSy3S1PKVgexdvPkSvFgu6",
  "key24": "2ykQmBNhLXUd2U6rbxhqw97P2BWkg5FrLqUSf1hZC94MPHBwnk5Xwk2A41AgCfLKTCg5UXkyM2JXzmjhR6pz1jTd",
  "key25": "5DezdoqRvgBXi5B8TNmCcMJ1umJA4rp6zocwGuDQK6GsTw6sdBZjETsjaGudGDuzspxFsjmdNXabiTufHrW88f9D"
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
