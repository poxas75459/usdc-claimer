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
    "2MJexgmisGmvrMhoXN2ihNPNnooEL3ZP9V4GmSWWEMajh6e2JGyKt2wFYJtswDNWmRqv6aNA6iByxo7yshxMdqHS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QX6c8jSPbttCECgTifTQnJ1sf6a6YkaXFdK2tbckReU4tPkiadJ142JgBNyxuehnnphjMbssSgoQjkM7SVJ8Eeh",
  "key1": "5x4T4mdiWhHnxeQ5o8tu24ozoFzrMdsLfbkHYHYjj6tPauafvNdghrQGzXCVBjet1QN1R7BZgaaH4XKVAVHceBuR",
  "key2": "3ksyHAByVqwoHJRxqqseFojtF9UFL3QNwYikvcVQcSXpJMMUYeJPVQZCyDCayrF7QRivnmzstfJFC1nsC7C7YTrE",
  "key3": "3BcoQuPA9mAFpCdaMVFzCXeiB6USVRGVfH5s9DiLHuAwsXvMYj2fpSsEfAwuSAP5Z2yFeAGr6ziYZqASS4A6Eaqt",
  "key4": "2eQ5MTBQUC7CrjuFPxG54mrzVM7DkPf96cWd6P5EBsz18CNHS8N1Yr4Hh4gZuwzaBz34DQ4tYRb3LTfaNEN84YB6",
  "key5": "9poPy2mwumvsGmNaqXohovMy6EoBLpqT1AB2MBbpuX9aQLa6FaEyuMVxt26Udifgose9SWWDcGuXYPbCcbQMw8u",
  "key6": "61atwg8ujzbxbTRAQPUH9SeZKZV8VouLLT6x66AsGijyT9ocopDJdyf5ryyN6sBLEk1b3L9zaKssSFHb3BrdRUj3",
  "key7": "5k7u74kkPNih3mN7E9tCLTRMt7ZGtt4aUoq65PDVbvu5QWXTm5wovJA5jsfgm66UZWqt6f4R412dxei7nndg2EHR",
  "key8": "2vDFvobNoqsyQuJqbxc4B6eUoXhYNN24urprPpKukwa7T3fhT7Yth4aHJ2Qe3BWuB9yMWs9Lva8S5a5tsuBA3ewm",
  "key9": "4agPNGCiq8RGUgDAcphN6iSBp4xF82y1R57L1EXpafqQF1uWctnUCM7UgDexPw2gU3fUKSdkJ5svq6mG8EntByna",
  "key10": "tskGZ2eTkN1u8Vx21gtAXpjL1zhrgRQ5c6omkrQNqQ2qhcXzscJ9x5oeXXWffZQocP7p4pWbdFuXb2j1MtzmG6A",
  "key11": "5zendtoBEti9u4oHg3WiwJ8asBryRWVYDPqpc61sZkYJVCSz8Nx82rPMkXHzo1admYxHtFkgkKqdatwkn3DYkbCD",
  "key12": "LCycxgqvGMwpzsEZtfTfY4hrG5GhBnuZWdYXSCiwg9cYbpht9r1AgF9gWSb7Wnyoc9tuS19DuGiMCmpHerkFuKH",
  "key13": "vvfeQniSFvm5btBAhJjW5NcTdU6eBbmsTRsXQxxLJjzRw6qKUpgwQ6XzGE9FCQZ4tGkCv8byxZ92uoL51hLsrdU",
  "key14": "D2jthJ4YZHX1QViNt9p1c8N3iJZZVPVa3fJsvBbHtzAruyPJm5BbW9hQoXRTWxKY9U5cnG89LXRY1wqQ1xMvxAt",
  "key15": "rUEeJ96HTpinVxzNggvpLJ1svDrD8t5xsCTdnVKk5HHbpkiAujB2ytYyz3dNx2L5bETHqnZSggL57diaDZDbKqg",
  "key16": "5ThdiBs2jDTn4DFuha8thE5GKnefGZ3tYMr112qpm7uVnHMvshMMYmDEHjEeSopF33KJhZBEVGfbiNNRiVHUVPvd",
  "key17": "3fe8n7QZnGHQgFvhUbfMP4JTzAKHAp3hCN4coXKgmtTHRBu5qoGwgvw1HaEho29u5PBpJB84so56Ty4C3X46Zq7i",
  "key18": "4mXuCk9QY2PRPLenQxoX6TBJk9FWtgBuzk95wLn5qsYKtYRFTZNUZvjW1iCcA6ydSLoiExbhfdzmKFsHQd83tNFz",
  "key19": "4PF5mrtoKKVu6asUpeo6JWNRkEPwse23M4VEaBQ2XVR6HswKa5eatmWW5UPDgz8UdZM33FwXj9B4gvVEGUZYDjsK",
  "key20": "65D5iPiUB8dgH9T4GTvz7ZxtUR8aa9o46cLArt6tKfpxhcErwnWvKT1kw5QUo9fwWrY4VhFM1K65QiLsWHmjkdp6",
  "key21": "RTmZNu5gy4fyApwb3iFiZknirE4R4nxp6ypkea17emcoFSt4pMDpSe8vFVtaW44tDMFDL9Q4G6QJEsYuJ5PGmAM",
  "key22": "2E3LyLioWfa1wRz37FDNKpWtc1uGBG3rWrHmxRs28YUmJKimTZhk3uEemdRXmXK139g8hKomaTChL7eftxsAJXke",
  "key23": "2HtX43bMMET1vBbxEGRWJh8NpMq5KcRAJVvEM9XswSrrCyUZ5UbRbCYZY219kq1XgxdN9YnTHDVorTcSxHo4n98E",
  "key24": "3WX1urzbory8bkJ4RfmDX8rVZ6wLynHXqeidpBeNEDxrPLvVrWftGoisgAwWmiLVF4i4efQVCA6a9HyfRhSYLzhT",
  "key25": "71638di52YeXEaETHoPTXrYRoHkHbak2YvUi2MLHyhkayGZ9xPXVV3em9Fc3jLo782rfEDkvR4Nr4bcUR9EqNuS",
  "key26": "YL532cWaAfBCTaRGrf7vPbgUyAu3YXxX4JGSXxPhzLmBMfErjvTBmfWDQMq3BoRvtJRRy3vBYm8G472VnspZGTt",
  "key27": "5APagaeWTTPBCCc9TriQGycC5AMpRbepaMgEudUTP5RT7byqEYDvzGWqqJiHHe9N1KtiS95MwYkZCLKhmV3Tebey",
  "key28": "3Dyi8W6TEsFnviXpMJz8aJvVErGZAqcD8a2ntc6mokUcH1n1HtStChyoE6yLTJbUAVgbqdE4b5hQx8ofxCoyMMg6",
  "key29": "3oLv1xC7mXfXyXoPh8uSTQY5ikcoQM39E644RWuLruZoE3mBp2j2zLWUZFHAngMDfBWmZeq6eFCm3qCHkRTkkuae",
  "key30": "3rQvN55RYhrq6qjdX4ZRFqW3L9UYeh6XbXoNNYs2Wk6NVDp3jJQrwskBNMpjr4ChALbRg4EtmTcn2cGmNaBmDuBV",
  "key31": "5nDSxPdx2BfBnJ8pAu8Q5z1J5VB2LoTdfrRNWH6wQmyVggPBnHpU3ebptzwjazaa4fEo8GMELU9JSVFmYzrTbeTF",
  "key32": "PfiwUzfCCgw7G2VV2fHQPjmRX55adjKbQnQe9ibBcXetsWJmf9YzCbuXFcnnxSBxENkVBV3U6a8fkuMzbP5GmBN",
  "key33": "2B9faprctC56CyJYr6ugKKNTi28PtZEifJT3TE4K4dEZn8PgNqZMKPf4uxRqZxMN3HVH8k9wBTmaqnoDBuVXe3Ue",
  "key34": "4aoSJNcsoGUBz8CVgreEo9iNS7DXv3KuZgwoJo9xrczTjBN5JZKFgQyyYNY2dX9iZDgrcRmMusPxGuwt24Zx6XcP",
  "key35": "4eFmtvPBCZpQUAWiVYia3NfuUtvSUbuaBcJnSewhEVs5r3MV5Q8QYJhosk4r1YiyA4tbmvLnrWgR3TX6Cun73ULY",
  "key36": "4SP5rZR7iHyNYLQqM94vFoqiU5w6xGUuxPGt2VJ6Qr17QLkfotfio2eMiMMWYuGco2eP78McpTGJfPKCyghEhahX",
  "key37": "4WyKFe5ddybSzwLh7wBRzX5UAZYgUpkrRJkfeUWmnYDY2k8nHhXzeeWaAitbXfmBLpTMwzQXjTFFNkG3kyxKZ9P4",
  "key38": "2gz8uB9FmacuKmoW99cefz6URRdhA7jMk2LWXBF5KkTajh3LoBE71tiDimsk8veLM9eXKmELsfDc7BxgaShPsiRM",
  "key39": "65HcG6peRZhq7Zjkf1aFmYWfY8BPdfaoJSD6HaKzyDBLNVCzKSozyLLRc1wmMw5Rw9Zcrv2E2c5nW9S1zV1ehQup",
  "key40": "2iCTyqErvWih8Z4aPYp4kz1iWeEEHQHVbAwEKdNxb6eX1zQv5itLd4vCx1wqtNoctf2TX8n29EpKri1XVJqfBdVh",
  "key41": "PqA2GwqJgJSuHno2HqGqkJsH2iytgzaNxnXGmmHkonbV3MfYxEFEZsbvgy1bda8K6LqufJEuu4k77GVzHc1UXTf",
  "key42": "5sEqeeG5VZa2AsFWDFngghK2D5a82R7iM7kzZhDDNY4ASz3Z6hQgigXRdZTS2NXrLbezbB9EM8FjFi7bRv8RTshZ",
  "key43": "2gAFzrXn2J1vuMTEbQRZFw5bzn4s1U8SAeSn5eubGxxTkz7QCD3iovmSMvALz9vzu3tY7tfUHsLcHYFAGRTeGV3G",
  "key44": "57627gWk9vAKhecwmC1nA385cVHwAbimLb21qkviRzU3MwA7ufVxfwQ9r8e15nJKFaNKDfwjyu2y9qcoZDkehGP6",
  "key45": "3UmMWmVhx2QHXBag7TUsyPY1CJAbzUAv9rjnvkYvdBScEBXn3oGfzj6NzApCnNET2qYUMLAfDjka6ecwcY79htpY"
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
