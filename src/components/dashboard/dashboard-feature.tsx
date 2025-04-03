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
    "4WyyGBQYtPD4pLYaHq7CgqutDaE95FP858tajzpycC8PrViBPv6FXhBqKpQFjDsoNBsQ7GjSwH9Y3Ynwr3UMBNJC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dL4oLLJ4w8i2iozcsZU3LvGdWnwjvbFhBNjE2du8opiRC1RVPbY3A5pe2Vv9cmoN9vXYwqp99sfUk5GPCNkZTC4",
  "key1": "3uxy6qJ6zENDEtBGAKcfiXA1RBJMb4ZwcAK7AzS4BQ8nCgnLxy3dcUBGshPrWPf69gYPGo54eZhyB974MP8yYrza",
  "key2": "Px8w2eksQGLmBu4EYC1EvrYuyCuRXcm59QakPU51m6ivhGKNfg8adzzP1AWf7uRJqeCJBNtyDQa8RvoGv1NAkMZ",
  "key3": "5NzzqE5Fcb53jz14vub6mV6nA4DXr3yruHVFbEWx5xKcxk9Fj64CfS99whJYKC9zW7z5gVDseaGvFap6rqRNXpT6",
  "key4": "37HosvfMmN9NU3MS2mkW7hvNdsDVp5Zni57xqMwsjWHUUb18QdD22MV6RWaRZdCeUYkdhMtKmnWZqq6iHxiSLYwP",
  "key5": "4Nt9c1G43BxAoayApVnENsMReHqXo67PeuGTdoqzsRt1aeU1fP9u2yvGBmPFBpeeyQNJw9Db8zcDtNNgAETbZTn1",
  "key6": "5z4y3oa4ET9nT9HGWmzDCv3PWj1hCd8WN9xU45gXdKoRaZTjCWca1ADKhNocTqak7R3cGbbv91zds3AuhRd67JKe",
  "key7": "mUNMdPVGkSe39cULeUTwpvbJY3KEXDaBzN1Ae9UorV2AL27nQPNtF363ofnQkCfn1JFcyatdYSZ43Y49GxLxGZs",
  "key8": "29MAhTDXbykGX1TNgnv1GLdteL51ueB3dBSCds1SspnVEH8nRqFxMbrar8qGD7p472HFBEhyNnpqg454og7VAtfi",
  "key9": "2JxdrhRpv6E1RNZciKHe74mhVPiwCmnWRdGj5LDpA3jfQAKwwrZbi8yuMGY29y7EuYNWBYnMfr3GJDeBbEpi5Dev",
  "key10": "TryqoT69qqehzefHQTAR4UTu4PCCJ1udTUWfcP3XwWnMZvYs7JyY2aNmA5365TD3ZaQnECE3HKCQxiEnoN423z9",
  "key11": "2kQWmosY3e6yuvd1w9CHAKVeSuhGZfW1K4Rm7deJ7pL78MFkzLRu5Xmy2kGJtFwqozWvKMAY7uDJGwp7xQ6sW191",
  "key12": "5XYVyEiVgJAn4EcfJMF8r7LujeVoq7jwgWb1ay7zWvcfPg6E4GaxCtaz6YfEGbuxB3yfMMBCjWmMeFDJGEGcscGr",
  "key13": "3YrXFzhKB1pVEF9TQEXk8T3jMiQSE2JqE1TJCarKKKEPepZs8nsZHzBttDJe6PUaKuHGk716rf38E4fF2DEXuPhb",
  "key14": "3pVgziBGckXF9so4PsTYPycrvqdsFhv2rs1zS5ZibKRw5KHKzev7HDgpnE7mwZHN8kNEtkfqmaCUaJLKojQZyvpg",
  "key15": "5XZzScBLYwdJrvxMPd5XyeuzXDPG4CCUz141Qj1sHMdfNixqxurF4zYih64c1aKWaUqhsGbTiVR3aCGLCzjDEom5",
  "key16": "5hsafG9SJXKpVDB1uFpDaingsf3K71W4gt3tebt7HkkxWfcJzB3FUe1mXUDFKtbtuLuHokbugFmLs7PuVL5bPzu4",
  "key17": "5aMrgCMDSbfwkPBnuhVBavVHU5ZcxTQryNcp41JkYacM53JbT8hHJBMdeKWMPf719FYxSPNPaEk86ZpFHbdz2v2q",
  "key18": "NsRGGSrxFq7ntAM34zZwV29Jvis9RPwUmHyade8vYiBc3ibvqE9revvHjExh64UZgPpzpS9yvSEXRmXksihMGeo",
  "key19": "58K1agXP3YnuZ7qVhHBg36GgfZuQvGW5XDTUFDcP9smZycjzRbwtZPiaMqbPsM4DLkL3XVqsP4gTyk3H7LHBHJdB",
  "key20": "5nsRUtbtYEdcpJRDAm1hwTBpFXKbiAUQig2WTqF5k3cmaPDV5hrW7UucuW6apETT8LTDkuSpiawLRpYtKfmdzAAe",
  "key21": "2CZLtZnKuHF2eSdKA35XcPg8TkNB7222oQ2ogs4Fcy8BGg1L8QMyspNK1tyBz2MXdv8pTd2NSmSqabkKLyqYZZXx",
  "key22": "4E4wzMGqtzfUJ3CG3QWCtU6HbKSgV5Jp5yxPGiunM3SEYtXzbCSc7T6CSevviidsS5X3hECcPSCWvtUNgy63vjy7",
  "key23": "2ftfSKAtrEwRxPRANFVzjBAeXZt6vcaeVRsKKodxYkTdyzAexHo42ptN82UKHUv7PGCVKrL8B4iykryQQVAeCJdN",
  "key24": "3bW9gVMvHgKEskVVypUicgZFQqn38Hvu6wApaf6pgkhQ5qfuw7gvheZsBAi78LtKR8s1jBx5CrRBnut7eV6HwG8b",
  "key25": "sv97Ykv38Gdaf9dVbNhZbZsTDzLqD1mKE2FtXvb8sQeas2sUyq6L6eXVowDymobZHsaUVw622uADopEhzr6yWDg",
  "key26": "2VhGPFeZgaiJpc8y2tv7wAFgXTFwe85Jfb55uX7wFrbD3PeyM48gzVDxpMz2ngi3JYM6XkCEcP2cJsqGAqXJxz8p",
  "key27": "3dJVDBFp1yRGu4L2QtEHqRNwktNsyk9pLLoY2rNU7UrpJGZFMeevBCFbEiUrwVpFpQ4h8KJHGvBJxrC9F9k1hjRy",
  "key28": "4gmY9fKnRiEiLarFKWK5gbHhUnki92Lx4Z4BkkJJg1YTrocurNY9aK7tcCL7ZpPx45C9oiaXcr4n1XVcwx2TWchR",
  "key29": "E5GYZpmh4CTSGec5ARGaWNPSeyHnvjVTP8SwyqEaF7djFcpx3pe4ciZ3aQHGWMMzwC5TdSgPdqxxpLrk1UWjnsa",
  "key30": "Wbh7kxSYuzN54McnjHSBpjewMzxBkuCWy1FSWV34CbitMhb4tywiZKrpWs9RhPNR6hFoWhsQmygpMGU7EiatG4b",
  "key31": "4q57pBMWKKHz1tQWfNTC97UTskhwZhkXumFyNasMGtmpWRqjv7VchBPwA4yQkMcjwb3QwfWYeNaKR5GoF1ygQTqt",
  "key32": "5nXpdSew13BHdtBCi9eBakwsawvzL5w6sF1crsa7GeKjGbvMNzJTtRrK3Bxpga1zoumqUfnov3644jLH1kun23iF",
  "key33": "MiuvfXHAHLMpNTGJVb7tCK5ugn17ksfm4DTcGdNtQxXQTdcjy2Cuhfz57vB3df9UgoNx4gY8BPf5vBz63Z4qRgJ",
  "key34": "2NKntmkKVKcsJ1bXjfgwcSRyJ9vqnCXHn8dZMxB7TigpYP7YAA2ChCoMqY7SXgdv95DGjn6VHvFyRSJ4ceqSDUo7",
  "key35": "fRrmenofcdM1BN6VBtoAoe9sdMn6xDTvgoxt73BQZBxcPb823mqn7E7weMwhFHAMGSeqKTidXxMp11timKvKvE3",
  "key36": "2uZTvT6CaerCsAFcKNXGxDVQ1BWK7RvqErDbaG1tdmwLdQ5djGZ8snNR9B6HhqNxSn34Q56bWvohQyqbc2r9MftD",
  "key37": "evJS8yANJDMmnkWok687Y8h9RXiTe85hkHBEnEdizdQjiEANUBgtW2hYqgLcGJTs5KbdZMQeF9ip5YsA7mDxwK7",
  "key38": "3JWT9NitH5EXaobqsvGTkY3xFXp2nMYxjeWDXZxTGEog9iHEsN91W2Vb6YAinZdxyLYbhtUkmaCJJDtTVeuiJWHZ",
  "key39": "4xw1S6zJuEX7SCqkREexMxp8yhaAM9ghF8cWcwS91Nn2aYFqC4vrT4kCbnKSawwet7xyxNME8NEiaw4ZUYg3VwZA",
  "key40": "5TLjHoPezidEADGSMcfZ5wFUnAngvHBHU5dVSSJWeZmmrXsXSkQtkQxJ5HNDBYChEeCuzyosZ21WWs7z1DHzvPpf",
  "key41": "3tHTGRh2MKK2FfuEeFgCLHmse1HfhfSgNXWwMaBRr3utSY1aSdatj6nfxe7gxA2skqC25YzLzjL7Jx72feAr2Vun",
  "key42": "2TPnFGtBsuugMvn9eBchf9q1pq7E8cErLQd1Lhxc1DC5xWoGXwtPugtS8cq21R71Vm7n8nE7SjAzf9ub4DCcnsxZ",
  "key43": "52yGKSndC1WdrKK9JXSivFLoizAcVgrUGaNw3XpoeDdc2VuNGfa6drTEJTdRhpgSGDteschvS1SwfeF1M55oAnC",
  "key44": "KrynTm1wrVmpAzJoacuRohxrRmiAFcry8n42E7SMPBgU2j8gtW1Nt9FjMTFcgM52GE7kfuQnjoVqokP4qDo1EWU",
  "key45": "3KnpAVshHEryWaGFtcsRXoNd3QQCtJWCQTuGfDFEZ6MdAsNEJ5XoN2BzVArPzRrsKnWTTbjReAYRCMu4utp9Ezie",
  "key46": "2rVm1JwEZsFVVNafCQcC9iZVN6kDAw6hniStxJhmcLqLrj7LJgpjFAks2qM8nmZtmqLN5zEDnLmharbmNRDYg9Qn",
  "key47": "3MeSepVMz2YTT4NpYRrcDBQaDxASTQUaihnb9HAD4dqABsiDzsVbfneGsTyHm2NoV91ZGm9PRGmUiusWYemLqqPE",
  "key48": "4oPNwcX7rPxw3Bt76L7X6yYYKYTEGD4gL4aUjk3YkPHR3PkfgWSaTgPisu15aC3aTgYFutL8VRR3EGQobWxnV82h"
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
