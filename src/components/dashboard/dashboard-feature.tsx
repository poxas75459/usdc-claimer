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
    "2qVd7YSdNQhhDFJCedeaDa28pVQfa3FB7MgKSG6yeh8Eup7nfyxUm5JfJitpdDBHL2QbkZxGf9XGoJQ9r2455VqW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e1q9ZujwsmquoPuZqa9jcjJBuL6Ta18b3bbwRz3gq4UDCcXxEeCsoLotNgfYbPs51VeFNynAk22vWVrnBQ2SmAk",
  "key1": "4nsaR4s7nZ5HW8SUu863irutpKn1pV1y68irr1PJ2QCBZkLu3PnJ3CPmofH9R6QApGLjLweYw99DQWYGp9LjMGs7",
  "key2": "3jPFf7ZjqJjodvjegj1C3VMbUPJ88qVcaixxHTwmKXoeoYyL4aLFAPGPb3W9c9fDbn5sWHq1NitEh26CF5YhJ9ER",
  "key3": "xq7QofjQYTQPoBMRKKKku8xU1ZAQ7NZ41iyY9ZA4PBNprGkLxXnhw8mg93ixrND7fzjKmzTzoo5fDAB84uupYwb",
  "key4": "3tDpZb47duRRGsugsFocMZ5UEvrEDJfaB2iaPsoUsq98ivNG2kH3m5vKoKMCC5vxw1N2iwSe4aATK4g3MwdvcwbQ",
  "key5": "5WBWCFGg8LKxhito8YkJgSGu4GSEbzmzoLWoZ9D5nHfa5KjYQSVH26R3CAzFjDUhWSaewMX5KqygWsFygc1Tg9iP",
  "key6": "5jtHmvgp6AcTmgWp99LKUnyK2hBLqMwdvM11WN6cwiErATR56X4UA3ivbZ2LNAEsuoZGV433mMfoW6UgjvQTUqm7",
  "key7": "4X66k6EFUUVxDWnAdwauUbm3hLzozrgP67CL799UCed27t18ynML4rUsej9MXWLsEoTE3Fm2nnK2fETq7bxBbjLm",
  "key8": "3wHYavd1DXk3WVFMF1HocfVv977kNeVo2VSLi288hBcaLJ1iwNBpLyjSBBSAZ2onafMCZXqMo8xCTXgk6fqL2mb3",
  "key9": "3n6bJKKgs4ductP8mbNmoh5Nm86SDY4MQkPy5sfq2ksZ7r6ntJ3WiwACv9eUH6BkPPsUbg9t3AneeuM4ZTXSzmRt",
  "key10": "58GJsdVHQE7sP1TVFBnyCdBK6hBC4omiVuUXN5gFSBosZYoHqS9sim8bmW7WA38SMCmt8jfyHgzvshTArnFcs11A",
  "key11": "4N5gigP9NPZCPLFmCkMF4eEuns5y7NgJtMeSbJSKZdabrq3z6YJ2RUbHsf6zUPP7KmHBA3joTW9A5v8e3fC3XoTx",
  "key12": "2LvqwYAaeYC2hWFymgozDDd2k2Sz1A9frJ7szfxZgnFBi4BZzXbPL2f67ofobkuUUpvQYv8T55d8LUnNNtzckxZj",
  "key13": "2TNKvLZEzfkZNCgzBRdmGMJTHCk4RRzFJvKbh2oQB6cZ49QHKxwNUC2bZ2cF4qQwVPkomNywq69SaVnhvyQoFKu5",
  "key14": "3tF5TmzTpr9z85WHZw5pZshUdnVGrCtTeG3JHBNsnMEtrMPL7u8pterSajWGvS8jsvNTvYoPqiG1dBrXueaCUmqE",
  "key15": "3Rj28mqgFRcsMigw2HWKZaezz8DKeLUbKXBT9swMLmMYNyLhyK3yKGNATncge7Cx8bXMJvkKymkZuTfM3y4EhmF9",
  "key16": "5oK15msqW92ekiErmG4iXmqauV7Cv5NxhrxxrLZkQPDbfeHpXweAuZhLMQYiNumXNacFUHXzYh9G73v3bYqidYXU",
  "key17": "5asL7AMEhNt1fnXNTMs2SgdC5SNDFCr1kqRXQPGL7cQx3asL5LcBKD2chwuRxjW8fYp19ZxP2h7aD6jQyS24JAYk",
  "key18": "2EF47y87yUCptSLhmRtSHXLVgBL3UmZ7GTiv6VpVxBzaAh2NmquJrQHCrJtaQ5htBZNxKyZ1g3gtayiZzdgbpjrF",
  "key19": "VF8adCconsn71XmiC8fPb8GbFzGMPjKSWapWpLp4fJLXkCKJackYECH6MGPq2RMQvijPofN64yLyX5EcRf2KzNj",
  "key20": "sULEYEh87N1nP9tc1E7g3Yfs5o7JDJMn678z6wWvSVV2fxfSV4eQdDhsDos6XxkbPvQUGSNNYbFiwdi6adv9HEh",
  "key21": "3kADvuuPbXpcLZJwAe2F71WCKbD6SqYw7YrDyLK5CX2fvfKFqxkZkhd6ySbYJCHcjvA1jLtb7AF6qMpXb3N9yHbN",
  "key22": "5gpBsnK4gpxovQvANYrowWaCrLFwXyGrjpg2Le7VeVRsDuwY6isphssHxBVUHKgDx9R1WRnrt2YDfQGDMPoiCKV7",
  "key23": "4yY2dUaPRmMfvscx8nCk7BGYZiVxcbbyfc51ogf1PYg1pu7DQ9RawwVFb1mYkjugTaLfpWWiAxSjHCbeMcwY7fYK",
  "key24": "2fNkLyaJrsHz6atXntacZE1y2JJUvzUBbm4S3YCvwtThWrQUpfwQ67aygVUTcaBfY2fERVnghXthBcSm2PEZKES2",
  "key25": "51uQxJb2ncD8S2Sop212Lu1LhsuMMVYH2dQgwap9sUrLBSLC7UZ8qGEpZmEwpGmAeEEe7MzfisCmyT8c51nq1CyH",
  "key26": "4ngLad948jTkPmUBg7EW1SW6bMkKzTtNzPzZxtT3zAqQF3dzbBt49Qr1CYtJjXiPjU1ySYJeiszBTJH1vTn6Rgbx",
  "key27": "2i83ssXGafqcKyt5gJDbu5m3rvRyCbpVctHRaK4Qyj9s2L4kEZtAwDnLHSUkudq82nhg5Xmxog2H8VXbzuKG6ymz",
  "key28": "3YNNRXXmP6875TSss87Kit3WAUMvoELmahEo7VDUDoVptoUB6g3Se8VbBy3bNfWQNNnLFtJTeW5C4NJPpxaVMsuR",
  "key29": "DWLs9XRG9ZwGogbkd95Cmy13H6v7RoA2Jcpks7Lu2rkGu1AWjrXsEv1nAgnzZAeF6s9NgXPxoUM7QD1Rhiy6d47",
  "key30": "3W26x83Ab9RTkCRzKwd77G4WYtBHFkEGub6bmWbYndC7QgbqzJgqmSuoy8m9K9MDqY5aLTwSwXRFzikZW3BXPgux",
  "key31": "frHmtbaiCQ8XTrT7p5fa7fzyjvnD4zsiSUT8rBbYExhixYRKKgdBwbjvKNhLAcxYDBmG7wqubRYEKkwR8dJYzKF",
  "key32": "5eaADu9iQTJZDJhAWyzigqkW5F5ufU2ahQtHq9ZpQzpFhCpg6tyntTFtkuLUu3fwfLMKoz16sFat13YRsgLWPJcf",
  "key33": "RFrd8SAL8xztPeCJY8BQF7e725JjiCs5ypXGdgfDYUetXCqVzueBvBZgsZ7H8ybYfd8nifzrCur2Zd93VqtUR5N",
  "key34": "3c2DwxskNmQfdyTJHdhVf8Cdi162Rmmsux4sc2V3S4zqPVcEuAiTQKxJScgrxSbmWGpE4QGyPdXF7LGhRndvN62C",
  "key35": "26aBGp4UsPMZTh63vn8hBF7yWwZrq7Lne1aSC1D2B4WkbC1rd6aGwChHHqL6SgVmJZVPZnivHKPY7uPkAeTUUXn7",
  "key36": "5iSSWwSwmbDv8zTb5BE2VUEttcr8AnTrq6YXYmT9uftTFBq7H73Z2oQKC4TLzggsXJxCygWazgZBtGKMkY3NNpum",
  "key37": "eKvVMGaEpinpP7VtkY6JnoPdUPkUDmZqQ1vA72ZD9E9GSdibj18XZcdjW4BmNknP6Q1K341s5QvNMbiR4KcgQ25",
  "key38": "4g87KZ3isFVB6sSHx8Uf6QvJFi9H5GA8ZGP6wv3cQTKoBDg7uSkg57VGSW1XLAswhutWNQ3XPfmPQwhqMDxxvN6",
  "key39": "5mXYTcKyPJKVjHejVRLJrj1Ug1jtVUxVMQbANoBcPBLdJRepE9TBvbwqwGrf3PPQ9irzMF9xbVRdH1Pz7GpWX34X",
  "key40": "2CvvuMjz6Z8YkETF3JAgbxDnqAqZjtgzMyRvW7f3gCT2dhtyW7tA73XKXMsMSdtdpREawTVgAHY7yzVUm5PXWWw2"
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
