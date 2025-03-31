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
    "2wVXvCVpVtHBNzXXUW8HCgpjTj8yDf5kQKxXfc6g4WEL7h8cnTPyEsReT6NhzqdAXGnYNYHEZq9tnwj78SpkxBMN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24MQ7BrsJprCP3CCRjR84u1BJtVVhcEriMUmWjXhqw5dyUfZ1yZSxWLKaFKxByQgFGRxywGByKoHSRaeJZnvDpdu",
  "key1": "41hfqVgb3Teb29zQT8gANTayPJSQ1fqY22JunoKYbg7jrg8iiiqgXKHffwgFdWMbpm7YSnatECDTAqsf4AGFhjgQ",
  "key2": "2fY9bEaw189Df5JUwVPYGqmMg6HxrZFfZA9BhAS45o89s4jMiRVgtoLsVHPRsLazErJZDaR2agJnFN43vX7ZZThW",
  "key3": "4dSMkToXYqeyTkye4MZ3BaYvEPHj2WiTm3kXGjJjA7mFhGCFuDAD2t72ZkBfocG7YK3prhcgaZHDzQxT4wkkqcob",
  "key4": "53E1ScSJzwD5vjfGqbKpQXPFL89Pw2Jv2Hds6YQwAbbrK7F49sdcWPEL2Qk1EaDVa1rrxF1mwjRKQt11QKT3753G",
  "key5": "4peDMR34MVZdTpiqwxHoL6957oMegVJjYi1r38tjLfXTfHnqQ21AHycLsgaUvwAimFNAEi4KG16pc2TCuRrUjdDa",
  "key6": "5smmTcrpFrnVNStiNAm2pDcsFjcm7SkdaPm2edibymG3FLNskYczRaYZP3UgDtX1xstoE7c3dps3LU5DgVxrCXTa",
  "key7": "2Ldy7asAkQGLHyAtxbMREb24xUxeWyn3u9sSPPzdq1F1Nk1c9sfwYVX7yQGgjMru4nmLKydqAXZ7fxqMTTf4YJt9",
  "key8": "3VuqfyatJQEuh3L36dPHmmE6MFbvKyNZSQsvy3KXsmZP7Z4QhD8e7e7Lst6Lg7PKBqoQ7nek2VgXCLcS4CA38feK",
  "key9": "2mricV6xW1C9qSdMwvGRPRgaDnZiikXVryXA8K2iAduBfC6mkgFXhCgs94WFLDbXMzvMFRRgVDMgKb56mVVMSckW",
  "key10": "46M3fD8HC3tkAUNcV4ooBH1aSUDNvoENxmQEqVaVn3qD8hjYgpK1vu7YRJcYXsdBhckbXaT7zunHmb1LnUcqNQeH",
  "key11": "2LNyzXGNsQ5Rzdo6DvkF6r4UzUXPxqazAHcoD47jRjQKX92iz6KKdzzfa69jygDxtKifHkamZ5oZtng8sYK46RKP",
  "key12": "4ZR3VgtN52mYVoy9L59AHPc39B4jhep3KdZL2PhQRvEdGcLDjdataXh1BmXbgY9MQH6tEXEwPHLRMowDw5hLHCpm",
  "key13": "ycg6mP9q8g7aT7ftkfvTDgSDCG1bcN1ATdVuiSWiFhWiz7kEy5aFZryk7WcJPmjrEs6SFpLF184vNfuiYi6aVi8",
  "key14": "25SDmR6hEZ1CzxQoFzm8s1nJxUJqPcnVQHZ5GGxw77EtnomLuLrLRbJs8VKnJ3gxGSqp9gog6qT2iv3KYCBcatWQ",
  "key15": "5iCBMhTVFTeBTrHBcF4trLbkxrWtCxBMELpJNBLgZEBq3DqggoLnGvj3UCsxPpL3aq7miFGDgdrv784tmE2wVnYg",
  "key16": "3sY6mY6mMsB58W3W6gDvGShcdMyfpkFeumj3RTR11E4tt1vXZta3XWwT3NASKSK5tSsnk12pTx5bj7Badgxowtno",
  "key17": "4Gatxd7BEQVmEJ5aQjwn23mN5kGKX5PqJ9E9xMXgEwEozNderN22pqsag5cjhzfqogBUkE2ejJGgfwhEScQnzNZ1",
  "key18": "aa3eGsLrgDb4vsQvoBFbne89zVbppBCqYZBA46kixAi7CRqWo1bKgA3KWeyE2qhuXqst6oFFbtPSN93ZTZFabPh",
  "key19": "KPFKgpyBWzr3Q5z6ehbxGu2kidHianJSCxrrerXgHWjTzmxk7hu9HhJzSuH9fjomMEHd9pDWwpZpBv9z1UCaBZK",
  "key20": "4CWV6Un6GWVFxtVDyFDu7g1YhAYZW3vCafkvQbnUXxKujbDCWbjEkmpDnoa8PPaPFGLeaxZZ3CnrZBe3HqnU69NA",
  "key21": "5q3qGMtPgyqcbQEmvsdS1H42nKmLAyHKHE5putLwSrXmesJQc2SdWYKUYJCVGUxbrnM9QHmxVy5tHQPRvxmgP8Eu",
  "key22": "5LE2GNLbDkuQg8kvReVGAe3pe4fJVJ5QszNtrr5zsPjDGRKpCu39DTRMPtxr4CopBzaqXWYZHubZXx75BFrRF5DG",
  "key23": "4DG3L5toc99JQRMk8dXv8mYwQ89mzpewk3KsPfewLxsKMUSm35aBMxgdpX21LZ34353F9b21kmsrrRJJ1DseXtmg",
  "key24": "3CyEsL5EenMxLcWzjS5o7onY4d4HA81ckyVmHtEwEvyRXvALnotTgxQjpUMU1QdraVr1NkiAk8YVr3MqKtB1hFSu",
  "key25": "2KRyVG9V68B6gYiH3CrhDym2eKdEBfBQ8JbeVooeLnS8Ls6qPaGA96MCknXiyiCrZ3EuJjDnagVYowW1Ds5aNuyf",
  "key26": "QF4vFgwd1k1wdH343VChzf1jXeofnCLZQbfhrnNLQhd3C1Bhyuc8QYgZzkCT8SghWV1ALLoLJyzcrwuA5zUmAzg",
  "key27": "5Ap6fqqgTisAo9bnMXCqabfbLUsmi1fDDbjTVXd3HFGTLpaNv4TqxfjmVFeBx7jRQVme9UcDwFCQfjGswoKNM4A2",
  "key28": "3Yup979Er35fM3MfvDAFZ6Yqp4hwsEHjk8vFEycBqqGTB5SStD7ThEkuXchFSS4jAHiNGrZVwnrBYLCRCVF3Ahhc",
  "key29": "3ZykouWNxbVRkVBjfREwTvNE6Kf8YPmbPWEg8vzLwftWgTtnTSnZFiaireoQT7dDA3Kkq4CYhdCtHPiAZHXCTymQ",
  "key30": "4UuSPN1yRBJmPADzHKtu2YTez8BkJXg45MemELidVAWPTgeMJhawLtrNEyexftHgxKBPVQ4jt1fcV9MnGsnUpduX",
  "key31": "5nqCHF2BGNzi5ahQgAJb2PW2RXK69iZSQwg7p6v7WY2dtYtnfJHD8U2gjDzL9nxjwNCctuujywNuBoWnBV9SCStA",
  "key32": "2aAW7xNhwvSacm2QW6GrAysW3DaUWcPyEf89exswz4HLtPuD9rMtAk94uM2TmKmC1hFWo6nFg8dhkLoR46DCSpLE",
  "key33": "t74VDGgmpGXQBtHtT1FDXhG7wwJfmBoVjBqvrVWsLYibLELwUFW4pEUcXY2adsb2z4DpmpH2d4FPTsGRQQ7SUEg",
  "key34": "SY72ksXniw74wsGk5w5Mu2xa9dDmdG79VqUyUxfeAtup4GKPAPeFmDfrShJ4gJMbr2fTq3eWQYRKRfCHxndwZ2T",
  "key35": "Cwqze29BEDhxH9evaTgMYa8VE35kEUDq9FGyC6DPWV6KPJi12ALYCZZ7hwXatdeb7SRuQrgRxuSiFAeaAhkuo9N",
  "key36": "5LmBuEBju8puVeicW3FsyZv3s7Fuvcg8WQpJXhq2foGVCBrawhrufCWk6bgBr2As7NZPyHyxC4ziwpW1Qq3ML3t1",
  "key37": "unipCnrZboYJC4HRj2Bgi5EDGvonGrRfiuh5kXHESU4oGv3m1fQnfK7WQBv69xkWMcg2Pxbr1pKRN1CvXwJuDbo",
  "key38": "nFfQzLXq8sa1UBdWZEj7hDzRufLBYRiVFjT23J4EdWzgKFaLW43Jh34hUhWPdBuUqBWr3ayanyBEneRKpm669Zo",
  "key39": "3Lxkybcnm9xxRtwBqbEbABj4WriqVfuNfhtVwgLpwFsVj5e2ruzNam7NgLz2wJ1eM7ZXbe6NMsNzu4BhhwBsDTwa",
  "key40": "41ycFQmoZCL83orKvX6AGoXq23LSWZFThSTjn6fmMsGbYM6u8sZxXoVCpvnU7LbT1oAuDuQKEQya7hQHApGhsgMg",
  "key41": "31r7xBHCaxP7ave7XKpSHMG4dNUypSTMB7GH9PhVp3Er47NaYoHo9DNgd1ett9ZqEMTHqnnimPfKx53nF1SAnYhL",
  "key42": "5iU8yainCWGrwcoYxDu7GpB8cDuRHVECqEF6WKyrmN7MKrHoqewxLC7BRtUkLBJokBxdkNZMveZmGdwzFq4sgdVD",
  "key43": "2vH8qmgm3hV9tzjyBk8nky8FHisM9wXTcr5hbg6hLfJn5n23wWXm65zxzwXMLBKtywvsGf3y54Vv43BzAcWz2n2A",
  "key44": "3zUTD34Q81Tt11bCV4ei9Ge9LTXf7cayJx1oAnLV8XTXi13j7jjDHSU83akztt5gUCXGTorYypYGW1c2WkSv4cZ7",
  "key45": "2LZQyJdEjbYT9okvcuRQM7wSUxAXmaknHR7dNWUQt6cykeuyraQVpLS2TufbTQz6SxWA6FVzdCBtryrsaesAcNUd",
  "key46": "4s9gAKZeFm4uWaUsDbdkY9z72BCAm5yQNq1DLE3gbBQeCtyiRVRY5p7r1bZVPEhbwXBfiqqD1AzL6izb5RFu4LpL",
  "key47": "3EbCRH4hTLndiTJQx2F1vADSCxMbjkhcM6StMeaGZH6aPgaHKTkkP4kXigKhFiAWVWPQ9AhLu2ViGmhN5sDxtdKp",
  "key48": "4HQRUUZtRr6TfiqsnbHS2qA6cJjJcUENSfmDYSvcy3Qepxzy2PAjKTCWkAa53DkKu5rA2Qsw9T1pkQJ4C18nxTLT",
  "key49": "GfVm8k3dvf5eH5K2g6r8yaxymjFJWQ4zzoqR2fWjG55a7pyEtxtHrsttYotC1phs5hAaRmVgjsV8FsjXcQ4jYsT"
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
