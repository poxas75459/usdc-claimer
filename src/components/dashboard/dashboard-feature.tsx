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
    "4TwXA3186FWkdbzKmKoQ6qzxmyHxeFPJdHFpDvvtiZNXt7uin9y8NGobaaYXYD6PkGRuEuhm4kvb8m4grdpNDkBj"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "4T64yYny1GK2aiNe55SYCCZzA3Qk8UHxiX2D7G3PpYj1rhwHGKKj2ZjwBmaWmNrLmKvNTc2vg8acTRycBcy8dCVE",
  "decoyKey1": "5sZUowpT17js15EvKQsfqqJ7WeuriPAmW6Sqs8DPJcQLRx2xkgZQWRnsL21915gLUrpNmcLZoHVeWw8MFtH8mU7Y",
  "decoyKey2": "2VhxhfbEgFJitS1xd53SvJNjSSrnrN7HLnq99eAUu7Mqr9cqhaVFzyTrs91H93h5TEtq8um4gmsNzgL8Xn7uEXtS",
  "decoyKey3": "3PY4L5YiPkt6vYGUL6QNioF51U46zXxhMeiefvR49fMtxnEfRUmZZhBX3RTBM9i155wzzrpSyoAuChU8WwysYDfD",
  "decoyKey4": "44x7YqTyqKfpkcN7pg5si2pmmJL3TpRoYdBbgR9sXBVwFFZCcxfsqpe4rDgaSFfgCjH25mC5YMijkQf2EzqWvCzE",
  "decoyKey5": "5pmoEp3rSioEraJmxtr6pnqgJX1NebDUE6j5FtfDquVkcBQUbDon3YZoa6KKW7Ngut13UMoajTkLskpaxnQVx68w",
  "decoyKey6": "3Cw97oSMwZMpqLCUpCCgakzkR7vRtnjeRKVg5eeZzgmiKwVij5nuX5pf6aKmgReCf4K2qnwMTJn69HiGVdatMGbi",
  "decoyKey7": "2L4uXCoFMnK6PbgV2prVEHQk4QmL2J5rezCDeXicbDEBQ3KsMnhcW1vNGEQMF2rpQHQu5Vg8XXaT67tYPpDabvw1",
  "decoyKey8": "4WhUiWP6AEnFT6c3nH61C6hREzGv4aWFsLUcpCy2zaX5Uvdjr4c82hCc6qBC3nxHo6jfwqfrCYDEbuKkfig3K1zU",
  "decoyKey9": "4uAs7fYrnh5R8MZtRZzBDLmXjwzhS292e2G7MtgDUcCoKzVNc4avNMe4CMcbHkXT7151byF3AY3oNzmUxJtSaKDr",
  "decoyKey10": "2dqZ4L1rYs5xb9RJHToeT75UuVHeit3gSYPaAvJuLCmPGyY1SWgNYHiGge7EXTeqS2nbAbrnbVm4AKDkujNnVGjZ",
  "decoyKey11": "ercKivXnNis8K1pYdFCveoWjPk52sJFc7zdL2tPHP8sJ6oNJ8GSWgWUgWE3NZoMgedvv16pmKeCABGptc6oTZsk",
  "decoyKey12": "3fVohewuUPEyWt7wXmRZUxwp17fpWqcwm5HM3a9pHace4ydBGMHLqQ1jF7e8ZtR4BGEzYaK3R3y7dNiitwyb7nBc",
  "decoyKey13": "4Yt624jieUWNhubhosgcVUBs3WV8KwB8JgVQHvTU2aXPTrePsKATQUrCA4wbHV99Jw1NXdoGTnFrzy8f4fCZNBD6",
  "decoyKey14": "jQHGEy2tu4VkY23w8MCYDs3gNBC3Z2vDNmnxuQmt8Pkn1mc7odTHMJXnQtTHaumkhYtCQpgW2d75Vd9k36zRhTk",
  "decoyKey15": "4YJuK3cwgsk4E6YdE7oBuZ7ZgCaDbKWirp7p8BBRPgmfP9htcP6MUSPbw2TnXYDmf4o1cSveRco38W3VeUHX9Zvx",
  "decoyKey16": "4i9yf1yTnszDCtmwCXt4Ht3s3fS1eYaTc82ncAwfKm1EkM9SF13DyQSyAtBAMT4HcDqfzWqnYNtnMGsQamrhfnxb",
  "decoyKey17": "2ZCtaL45bsnRBErCWnVwRgY8PUjh1TWs15DhVuua4mfZcXH23ysL2aygFqFWdgCgSJmpggeeRC7rUwHEyQNQ6ion",
  "decoyKey18": "5jLiZHgTBxpsW4KTdaMko8kGnxqgPdAzZAeTENhUBnXBeTvc1ppQ87qzgJuoXC59PDafbw6sdzWM9Gr4aQXJpg4t",
  "decoyKey19": "2CEG1McesagD8KhwE2NgF6s4Fb3GhEUW8uedPsCkdfYm4umepJ3yybgPPWXPvcUPsHpgcJ1CPGnvnNorqoufpNAU",
  "decoyKey20": "4CTHbuyg7yQGV1xSk3EwETDBup5TovkDwGWovjBoovoe4xW9tXwkoy645go5FdQbBsqexPbxZpg9cmzXzw5sf11Q",
  "decoyKey21": "5zdMNsu2H4kYDhrj2wG1wPRMyqNKG8N34CB3SqZkRNSULbqoJEUcfD7QXBsd78xkjRYZ8nTE71vKdqFk4sMRNzSK",
  "decoyKey22": "5DcAKN84SSwGaAFKuNcJhxbFw5r3GuT83ZBajwAF7GCPpaW5HhUSnhqooLdUzxMzUyc3ieGxtRTwaquhzuwPWToY",
  "decoyKey23": "Fr8TpYmdJP8nMxU4y1uui9mEUQ2hu9fbLa8dekoS9hzgwjKQGYsAMijbw71Tx4BYAbRVVBwTFV3FvkSBr5qqfXJ",
  "decoyKey24": "5kfknR7h69JbCh1GrPZqSfGaLS8fny3b5WBBD2XmMPCqzV6gGyszhBvYm1KRAXNpmUppGzUSJ1KfGXYRsmyvmqwf",
  "decoyKey25": "4P9qvi1CoDaFmuxWJEJ2AyVQJvVtpJ6y1cLjegaP83eVnNGMioUsnCJLv4vE9ae2C6QQuHULWSgi5NyL8x3qKfo3",
  "decoyKey26": "2sLnX27mLRLiTFZKASuY4eBRA1fkafc5xPAXraQrRbpnDm3cfgnShZ9vz9C6wT9ypxtnJTTJhYP6XaAQ8C8GbWJY",
  "decoyKey27": "4qPg8fr8ZkeF4LgaifdoqbKSjZf5oEq1whc8KsyeftBuxJjGqJtjx4szp1HQL5ywcceWrWG1rN4oR8WEaB7hpw21",
  "decoyKey28": "4tDqCosJdbWXjNmrmYCxBuAZmppvbjeqesKeevKzpV2scnBJ3mJMn5HmT8xGdhaRwjiEysFBVSNoXeA5vDkcjRPB",
  "decoyKey29": "3DUAPGxq9imyM9ARUytXUM5qxK7rZVGidXaaaNZBQvaytjGiajwjR9i1yhpptyMPsDTU7etYLfZLqkQfQnhvtzZv",
  "decoyKey30": "4sfAa9sFsEhSpPhjovvjNi1TwLvg2D5VqoTGqV8VRrbPJ2kjzAtm4zpnQXctKAeQFfEjABi1TZ4hqZvJrBQ6Y4Yx",
  "decoyKey31": "3koE1c9SXG53pPDE5ezbtTkVZe84uJWtVkVC4NyYerKMSx7qxAMRVMwUe9yaNTyCxbXoB7YysCbYXwjAkfUMinTf",
  "decoyKey32": "3zK4kPJEF2UxrUKpM9JkJeqLPUtxD2ee1N9DPqKVPUt8uQamRYsgk5vbMSCt8VcGXoF1V5q3Q66Ug7f5VTfWWtP6",
  "decoyKey33": "5DF68XEKa7VbWKCscxB3ztn5p4tUpEVNt3D2WbFhSys7LvQhJz231a8fMk7rF52BrWKApQb32jrbhrAd4MU5r4JN",
  "decoyKey34": "4JkoMpv3Gdx2SXC8et5NjyfTMCRKYY68scvfmwhuS8ybigsmPQUyquEApHUFsKByGbHQ3UbnWtKrVv1rMbCi5QVA",
  "decoyKey35": "3tLtcm5RQseBpezTtfCaXjYDWQ1C9UgpnvDid3zcJqa8VcD9gzRxhbkme9goFeBqMHcPGQ3UZnniyVcji3gDQYVU",
  "decoyKey36": "2h43ofrgSrho8vwZbF1kPZEbfua1D1JeK2Q41uUBBSAmjizVgxsgkKQqGffGEwRdWJzCYk9ZGGajtNbUAV8jVago",
  "decoyKey37": "5FPyhze3GSmJX2hkcBXxhbiNpySw4e2JKj6pZwpDmmMz3HTqJo7Vcod39DS2SMojnwwLuR5usURRBc8NcnN8eUuo",
  "decoyKey38": "5ghWXkuswU1skih2Q3maHiDtVtyVMDL13RGaWVobVFysoPZkCSwGkzAkNLwmccyWECYjqrw26VmPMns5HfkfLDNt",
  "decoyKey39": "5CnLPjRKXDKparP81473EaVjsTY5vpUFp5a3c1CUUSBp9jBZSsm3hErsaDorm3VKYafmskAqxv7NgydecwLs55Qn",
  "decoyKey40": "3s8yX9JG5sVBn5q8ShMZUB6wZZiqSvcVdp7KB8SRB2UTwXFeysLtGs3uEraU61uQpnkMxBoowzEueuD6TZtKbXT3",
  "decoyKey41": "31eAY5idjTHjXJ3GgYLVo1WLnE72yx68GmfVP2hjefhnguA4cPBLmMSvEkhvd3jkCukkmzsGEF4fLhKkugVad4zv",
  "decoyKey42": "64GbNEmMVUjo7AUfQqCbzESXge4LVcR7DNjLcYppdCLTu9KXur8n1tYSEALDQaJBbN9QZwToQkA46gWixHk79WDo",
  "decoyKey43": "598eGxZZqXx9fseEH5kVwQeknevxryWPYmAv48Ma6ABNT5VAaMQULnNYH82Gf83ww68qfpmEM2h6VZUn6mGAHEcL",
  "decoyKey44": "3zrohKaxcS1Dg7H9jXnUY6hbw8N97kWr84J1t9FryzKWucqweTCUWXFFS6wZ4XptusovAHD58bSLXyUYJodJpYzn",
  "decoyKey45": "4uUW6upVEpxbTdykNMyzVkR71D6GJDMtShvXowxfyRiMZoantvz4seP6vBHXSysat4bdFTxrpmDqmxWqYbV9dQ3r",
  "decoyKey46": "4VWEHU1xVi8xxibVVb6jbwBoWfUVKjTNsp6kNCGSa34RscZ5W9eAwpjLjkEtcDAA7mz8NytAMhBrbcMvLcLhBcc4",
  "decoyKey47": "3n6hiw2B3SCnmBaLnXP5u25y3MxG2wmDYuvpvfqodmhSb48BFLYfahxBE4vHFgRs9uYNWBpw5niShyzLpvcWh7kS",
  "decoyKey48": "3ff7oaRcYmY54dhncN5URkNHt7WEBE5BLr5TRJa64h5QQt4TJ1tAtQ5FiSGnDtKSztAVWZmCbsPtbGfsh2q5Lfw9",
  "decoyKey49": "3VYprcbsU8x9MvB1sYArUDhJNoY9NG3mR5MQY4xPMKazi9D6RYDhxPxfk68bYSf7ipEKBNYURyLwHr76dzXP5Rtd"
};
// DECOY_KEYS_END
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