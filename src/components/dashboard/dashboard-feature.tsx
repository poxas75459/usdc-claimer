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
    "Y8GhN6cnPuRAcXiDvaEr64wQLkbjsfBq7jVFHeE3bEtFQLN4ERwijJghEZV72PqLAA7upSZT1qpndg2XRuR6Z3X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xFXk6DWACgTABtJWquwtEx13qBXs8m1sytcgnDQ2jQ9sVTWk27Cfee4bbwkbeUPz6YuAgRFdXx817A7yAFMrnzR",
  "key1": "41B9ULwe7xceo24sZvYjwN2U2BR3NfDzhdTUiWfGm1GTX3tgTZSomKQTKbLc8zHH9VWw7T7vKEqtRsgHKXq1HBdv",
  "key2": "DkVL1VZ3A3ugZzBugLgT45jUCE72yHNiYKzHmt1ZqLSQmDdAj8Wo6spvbncwZv3KaRd9kEvKisSVioN3srhBH5j",
  "key3": "4ZUV6TriiLvUdsiatmy3EqGhuAL6F21pW94KvrvotSFN88i73p7uwcckSZGszHunA6wWg8i2eQpJgBY3VTuHpfpD",
  "key4": "5LPbdQeQ7FXrGtfpifTiD3cJCiAG6XCCJhT37enUQ9qPVaktrvjFVSC4r2o3qRq6fHaQqMBAJhuoEeds3FZioW6p",
  "key5": "jLn3WLQXhdx6CCLDaefbAX8wA5mWMFXF2prVQYrkBpfGBUZZvJ7VqkuQnjGYbBcxr5w1dPQAetLHmzhwqUgKC9m",
  "key6": "4waqS5gKkdx4e7v3SSGNFuMbVTzvCn484QCGdEwJjFopcE9sJ4zMJUAf29Dy4qsGH7CscMgxSdaQhJ9kKDcFX3TB",
  "key7": "2x7XdYtJytdGFaHFNBsKDnPxRz2pWvaxrxJ1gnGqrjVykr45Gbv4DkdmiSBrcwFrXd4BDPP7ZTr9hMBvPLSbGBSo",
  "key8": "qMNeusqYMpyquENZgRvzDqrGPEvmvXbQMSzgS9eVJkggV48uqFBTrs9hCnf5hZCuAPvUobN41AjcXJbTfu8oUTu",
  "key9": "3XLgdmACkrg7i6aHKDJ6ipcS91Zw5Xr1vv8zoEtGcaRDzy5KvghN8eFk9L3jLU5UbdyGXzH5FN9xrQiTTnkh4LCG",
  "key10": "hY414mUx3xU1aMJYYbo3gVrrdifyeXn5FeTKBASQUpggob5LsyjZLMivc2YDSFdhjbCStpBxqbbvQoYuuG93R79",
  "key11": "5opmG4F5mwLe2eVgDMbhSU1ZGiLUf6gXCZdctQ8uZ4EdSpbi2NrHY5i48YwuTxfJrnvNM2rs9yi9e8kM7qtAjYbA",
  "key12": "3j2KPYnk1GiWwFXLcBDNxKgnAgvWGTqDRc8rnmQvu9zqhZkkbswGUk9DUfFfpt4DbBaT1aBuV7TEUGarZmWubGb8",
  "key13": "58rcsNGp9XDVVLWd6o6vrYjTveAGUPNRCqLCEGb26kj87kCPFXXaro7ypj81ajD8oRLrtjyAuYuAcG4fWqBpc4h1",
  "key14": "3WCK1pU4ixLFS7iqZSLFjqCiFhJFPdYuHTuTY3nu94Jkfsj1ohYdq5pxVmkuvqxCB7s6bSU62WP4cxcaDEgKbSRT",
  "key15": "5BHdq2Wi6L8DEQCfPHyMRggsRRseKFurxyRjytgsgdbLkfhykYDmXRsjRbxABkE1vBzY44cx952apiGH9iG1Z1s3",
  "key16": "38RLCc5rxoC6kDHDjzYy9DwXcFK6ZVjcoE84eayBbC1TphwK4wh728fr5dACtvTNf7QGJhXD3VrM4Pm1xsZE6YgH",
  "key17": "emvAYy19vgzbWkvgFWauk28Dy7MfGpvYxpmbbotPEJzsZPogtnZP8THRptKYqA9oqHUT5KUDvPVCvRd9yvgEhK4",
  "key18": "xpsgAAyt9aHqjZKcfrnWNKdgq3AxawsX8dg6a4Pxd3sEJVCNxmRh4L2Nj77JvTphZuQYWT4VN3VFFt1d8sdEfXA",
  "key19": "2fSGnRBjobRWtTs7ZoyB8AiL2FSGzkVom512Ngxg9Xa59j2Ru5LPBde5qTmWReeNJCFHApJqzDoDAgdcmQqQS6ZS",
  "key20": "5yoCDW6nKf2dGeG3aZVUrk4uXg3WWKDjB7ZTkrTxKZoHJLmkuWxBAEt9uu33QwmgBFRjXnsi6iEJamo5sJQ3djL",
  "key21": "5oqbSNK5N8DKdHiCLJ8G7gcj7gQcUnHpt18myvwy7JwY1RwKAnqziWfuTt64x9nqpibmmr2XMvBnijhYiqekCbFB",
  "key22": "J2WPLHb3ySWo2y79g84Mw9MDzep4txUiPkvSjm227owz2jtbjYJHCTGHLiXpoqVh34coURhUpsF6Hvq1WhdqjDU",
  "key23": "5q6mgFz7g1s47BpD3gU4nkZLd9LhhMjYdep1fTGNBe3A2MSZYX3skMK2KKYXwB3SmWZJJox2gz2LmHVgnnhEA8BX",
  "key24": "278V3cacHWZ34H4Jd1xF5xBTree3NoyG3M98HtFDWFcu8fHy5Cf9enPCNywh3HfhCsdChorCVrDo6XqqjybLuVDr",
  "key25": "ZbTUcPy32J8Ayg72A6FNpHcWks3dqfQ2ALdkrjyzJ24anU6fJr7BoyrcEyVVhg1TeXMm1ddEVxz6F8V846jYnat",
  "key26": "jgoew6DejCKeiMG726doapswcq886V6RZfWh5sVNG8Tb25fsrhkmEngVqiExw5P7psaSDbQab7B5WkGLEdYfEoT",
  "key27": "3jCLHQT5e78ZpqaUaVS5pKxdF6rGsZgLi7r359k2Td4YaLjiMa1y78Ei5khEMbbFg6i8nMC62DiS6NBT1wpDbtz",
  "key28": "4ZTMYcGbRXztJQZy2TatKY1ZPBvQ9Dc3XiNME9fqWVo35mNR3Mrr1xN7YbQkpyKG46jrpsFV5EmvKm15CroTMhvF",
  "key29": "32tUPAwFs9cWkYh3B8vJghn6jYRNxKB6HFTpiftFVVgFLJxHGi7EKZUeiLK9zpfB49dnnQMGGrVzEyjmbpDTmFiA",
  "key30": "eH1JngYCwPkfR9XNC1LCTeA4z9zUcV9z8xHS6rb3t2vpQ1KHh2uMTS1xZvNpac3B7jZPdE4q8R7Zsu9XRug5DYw",
  "key31": "5Sov5SKZ8A9SmZUa2HtmtCWT9KppgBxW7VTo2gWJ27of6DCZV1RVjPvqF5rQSzv5LjJXBiAvYtr7cAiwnh3iPNzp",
  "key32": "2GouiRHCbTMmBSRv5vNsih7Shq2shpzMEYmBQVPvqEVQrxvV2373VsrXB3N7vAdqfLkx1BpkEna26L4513aDhx5Y",
  "key33": "2rd32NS3RKhCvzvozZT7W9xk2M9e3bfmo2tFC47MGRd6c6PMSHnhcb6dL9RbbCUJnupXpBspv4tZZ8D4sNcUFr1d",
  "key34": "3WrtgCnGF3cLBtuahPWjnu9Syipp9g5Sy11JyhVzjWmFqqRAbTd93y7C4yaizj2YCnL8Kn1BybjB4HqopDbNWoWC",
  "key35": "23fbEumFahyoZz1kQt2J969dUtBZwktyVh1B9ehiG2umzmsQTnLyp8rgkuZE3KLDuNYNzvGWS2JURrLAURJHdL2G",
  "key36": "3JySPjqwNGMKsKRj8HtkduYr4yGFrnwKYtPjhBbvMYtE8ZxNAoD9WX3YyHXuvwZJksAu9yegxdsEbCoKxotm3AuT",
  "key37": "49VDhSzEdXhmUEsGtRbikApqNZzbATHSXFuD6Jatn93crLU1MxYLvwSLv36yXAAxvHpoTkW2gtpxXfDAQimtqkJp",
  "key38": "25SuaS6AKuapRfLro4uJc9118dvMJ5AWVhuKMGLDddVCHExj8mEfYiGGRG91PeWy4qVgJdQrAjtcZ1k1MQvHYRUF",
  "key39": "5UsoyVUr1xajhe6uX6RH9ZkpiwwWkYdT9XQp1ECnhGz8uSoina4sDJTKNFMACVMVKiP43BrLbMeDZnyY8aCRRGzZ",
  "key40": "5t9WvHpu4KA8EBzDpcoyCUuCKmDuYFjW8rrnJMqLF9F5GExP8oXs12AK9bpPm17TmcYwUdHvXtCvuPza1FREGEAs",
  "key41": "DQqwPQDoJ3gtPnwteEPxPY9t1Xa8TffjjYu1DhZ3BgC9W9zVJn9ZG73Pk2vNXdmkAbnXjbEazbEJ9a2Mnw4JqnL",
  "key42": "5sw3ak4TbjsZNRPbsrJ1kYHKxixtvR8yk2EeAPuJSAz9Bvueveoo5F7Eyg6MjoE2tjm1C66Nz3wfszc52y2sRTmC",
  "key43": "3hef5a2s4tqPtBDrePvbpYnCqa8A2pxCK8DKcNQxdTxPPMTarFLjx51w6t2pMuRPBA1XA4E9SM21SxUdB6ujitQ8",
  "key44": "4t9dcKnzemL471S5FuAcPccaG513xUCAL5a1HYPWbumx9vHwMb5rCsnzKsR42CPnWt8Uwc9xLLTBbsau1yvHwN6C",
  "key45": "1oFVDNYQ9uwa2p8iTS9ujT4iuwvAJxATP7rV9knCdvCnhgCQE8zH6cde3EkZUWX9y41FUkKCTXGaWrC91ywpU7p"
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
