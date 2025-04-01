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
    "2ZLypoqeQhpMyWsbaMRL8TFHAzSdtQkEBczFaSroWm19R35gEGebXuHrsjfeFHkJcTVQx5gwNdbLK2Z3hXnwDpCw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B47yoLLAMypgsqyjr5RiDzmQpcLxZWptfscUmVr5MYqRM7ffh41vEv1S1148gkXj6K85ZguJ3Mvod3LqbNA37Jb",
  "key1": "gvYgCUbty5uaBniP2ejtbGDKMm6jB2upjhCkPb8ev1A3C3nBk4Tyib4XXDP3EtwDSSyb7b3PiL6yTCpggANMH1s",
  "key2": "5t6p8dLCNda1GekUnT4ohRtURFKomTgwsAMjHVeaDUu9GH9ahHyGy7BpGCPr8puUwWZpHw7LKFRxGfsXxqqgnQ7g",
  "key3": "r9RzoMcrpHumBA3uedeW4fNNcRhmTx36iRafKuv4CGKArdD7DxBhGd7ndzciURpWV4SZJMyhKQdXPEvUTkUfFPc",
  "key4": "2C3pQWztPU3y81x99epFnbEjRYFeBaj6YKCq65CCGCmrxF1FGvkrxeW7RZpbZB2qhJjW7KQGhppqH4JQibF2UxQc",
  "key5": "TwiEAy5A2kEPxmwePscVTGPupMi44sJJF7wQeRM494RPWvhBPQTfiFjeazhNzkaAUYUAz7RR5C7jmY5vTbWmAgV",
  "key6": "3BwpckLNLT4xw2mE7MdcxBANqqKzgVPb6BHb3LM8fCg5cp4x5TsqrWAfg5Vtx96feJrAk2LRKrr7HiusqWPmk9KZ",
  "key7": "3erYhFhBafeM5MAUbQ1xhSsU9RBWFS2NGCJ5SHMk6JgwGPyF7Mb2UUYZdXcHMGeMbgHWktLVfRHwYzrkkJhqAWn8",
  "key8": "3iCMZbYvydfBCYv4mEQWcDCP8ogXFs5hW3sGZioyYtcHvgHoSayNqHmLwCaYpGZfCfPNvY7HDU51DxUrDtP2J1Qe",
  "key9": "6WZUg3H6ZvuXm5CbRevtsxHVwDmVCgm7CVSzQZYsH2uuKvfedqxAmj4fLUgmgZzHLYrrb8G2eN6rYLfCmWjGcFs",
  "key10": "3PuTW6kTpQA7tCVdjv1c4Z4D3cm8YPGUmmVqNJQceGhLsqZmV2QuASqNzE9bTNG5vxuugiAZF5uNnWCy89nMWkcP",
  "key11": "3yjY3u4iNAKwvbhoAnrfyXDgmw8Vww7Dz3XfDVMWcGNiZvUEMkT8pamwU26mWK37QqidEbre2LRRcyvndqQjhnb2",
  "key12": "2wTmBGXAttQuZm8MhaPJfgf83usroLRvoqb2bxbqAoXzxEKCmzGZUY75czFgXq59E3Ut6fErUDwmLc27oZQuMSgR",
  "key13": "rrozJo6JyfqY2WgtQ2mfzHp79bi8DFJAxXCH3WKbBTLLwwmZ1MP8wAre9JuauqnPLPJEc5uGWRDtyAtJiyoEJSA",
  "key14": "3h5QMvNRtzthiyih1jSDyXjL7wGnZCVCcinsa5zTqiu5cVJsQZJUEXG6rUxFFaN1ic8TyaJHhZFPoxWyQenmSsDz",
  "key15": "5ChxRgkn9hQ9jRKV9mMtFw7a9UdJPF97EgDMajCFPXvWf5vuhrYSwKpU1j2nSJLC3Az9wqNqS5iDUBxy5as4m9tK",
  "key16": "48JtoRnSPtfMFDgNGrVJgCBhX8HJFZ5t5YZK4PMVh7p8eKr85K8ooi9w6NGEW5TyewYiyV19PUX69XWmMEozco7W",
  "key17": "557LvKt8pksR95rNQwDBeemq7YFd7SiZePMEQbxtyZsNb9BUGEJ837KtHUDFvHqWxwFMCUQMRxmbKWURgsgotuqa",
  "key18": "ttGa6y3ZgA3e4j244CPLDHT5i1THrLntJvKMRykefifrm3i8iqWib4ovNyyCQnkKuNhjJ2RYMZ5SRbE9M43rSqK",
  "key19": "3D6KWu2DsTLdYoQfnRLXUx1YmzEkvFRns5ntgA2Cythgk75LcMj1vPbkZWEs5zmT9JTh3HSdnyucja59xoVStEvR",
  "key20": "5FHAJMUPjFuASXp16wjoB97nFrJS2JAPpoNMizyQ3BX15QnhtE2Z1swHyDcixnLWWz9BHARnkrggx5EccRThNsLN",
  "key21": "ZgMsRdxz3GjVuK9H1m5fZk1RwCHrpK4VMWg4A5bCeraNz678YFZaRtCmiUKQcH5Q4q4DC3RZAjDyj6FSKqF7wtg",
  "key22": "3MN2VVsc8Roorurzg4DjokDkunBppqkU6zFVdH8iHspv7X4WgSum9Xq9MtTRSfh8cySmSCfX9UTPZrTio1FcNud7",
  "key23": "2LoAA41LTUF2UF6TLr3JurC6vLcMpRpvahZYu9vKaLM1e2mMgTbjBBPN7qo6hkxWuFJDVkPBXBVYbmsBrMeEScUy",
  "key24": "5kpKWZZGtVnUPpa6YJA5fppNecLhdeuY5fAhxGhhucffbftzBmAADjeg3HBvfkLvE5vvWQVEfG9CtMRkL2NkJPMd",
  "key25": "aLNsDRWxYuYYXRroveLB2g9N8gQpVkZetWoWmFypuseYcrrJy3kWCANEuVFDnAjHQime2fxT4vhjguDrS9F121k",
  "key26": "49QqPMT4mk1DMNTtfK3D9GBhyNGnT3Z6qXWNwNJZzkytvZrANtBdF7fhTzRVuStYyd2ZWSi5m4TpwCm6fKTHhVmv",
  "key27": "Kcz7PQkrWuAb3VnmZDXkLmxK2BBAFdRZKT6jVGDX1PbhxmuEkZdWb8RG6FD6buJNTknJmzComsqLhRfuTiSfAah",
  "key28": "v5sESkLTiRU8r6aoJBgaDPSpT1angEs4HsQyYXVHjPDAzsxumBc2vQz2Q1Dfxvvtrx1zhhw5CkjCL3xxBohT1LD",
  "key29": "4wmZrv1bsG2S575Yywju7Z2kTxooh2Rcasp2YG74p71G93XN1qkMtv5LmNJnaHvKTtzA9spUJYyvcohCDg3EYDZ7",
  "key30": "5HVrys8Mx69NtJ83M9dMRmrnz2K94FFy4WenZrdjaid5ZQ3hrcrPqRYsLLpBkEVzb787LSsVqzL8zWpJ9h6PFAXB",
  "key31": "3Ai8KubVvnQL737BXugGSbidfknzHhFk5ub7riEZRRAm2HZwfKioemEnuWmVz97puQEPAJQBpXrBLMUvfJZwSDeo",
  "key32": "53Jny8qDW7b9MNJ2Pit1Pa78gAo1zPALMREhcMB7D6EfWK3w2qon9dUwdjmVVGZFvMMbbZ7vBZBPNri6XydyuqeA",
  "key33": "4wpiUVpovu6hKMsKEWkoaBDpFW62fZdXm81AsKfQqm3ufM5ZBrpB6iVbTHaJ7NJBnCiqRCjERQQ9FctkTxXWTYQC",
  "key34": "3fKSzajn22AZHeM257d8BFVXDsJT3hNxJj8dLxDN16vQhxu3AnFU7FZQvi6xLS6zFBeyXcE9EWR5AXufBdeVCEk",
  "key35": "4hVghQSLHbTdWCuiQqgtA7PSWf1pAoNPbLUffNqBFDm5ddyPaiWsTjU3DU9Ahcpa8S6ewrKdSUb1osacbqfn2Qi",
  "key36": "53rEkkJ69htziZwxYEw8J2vG4WbxydfKqqVcSoAxuRudzZkn6hobiWf2TLxnGui1SifukVqX8CkjyjRZivLh6tZe",
  "key37": "2M6s8ZiLh94jcD1PtJRwcAwPFuNNRwhx5gsoGtvUYiGnAochpTbsC9KhjfYgdh7QFrect32MqYjdYMHCdGmaGYQt",
  "key38": "wWpXkg6oyaUVMNaX14oUEWss7niJNFKrW4pYnFepAaUEceps9VErkoUSbkXp9cakSa9gp6R1Lm7tfbXaNVhxVsn",
  "key39": "zeqTTSzDiuEAWJwipjxbwm7ffmLM659rrXFMGjtEADPJUJiQohD69FPLVW6hYAdm1AgUBvrW1yxd1CXhWJ5iJvM",
  "key40": "4AcRjekr4UwBSr1XYe5mj8SZ5kFJwuBG8ynpc9HJS58CWio31W4wQp8vF9AjC9XqFe1jo5T1MHh93qjqQuW5hoGA",
  "key41": "2YBFqxKQo6hy8meLF8K4nPNepDifmqRTWf2M3moAtQKBhFxTi1WJydU8rCT5Nbm1NDCMvfGyvWXBXucn7xjGcAYE",
  "key42": "cWswJPRxuAPEfP63ZcFrFQdxA6fpn7vE8R8jNZgNxJZtMa5yWsXK7cRgjxcd3qFfBHJRyuFCJFhQrM7VqZ55ofq",
  "key43": "2Df9YP1ZDKmsqfrMZQnkypxUU2WwZeahDWNACkg16pH7uPtvc77w4B9Xhpe6Nm42kTghp1maT7AbcobbqQH6E9n9",
  "key44": "2ovrE1KA68c2Ke9cwX8nTUiiV6CFWFcMtapGVmewAWavzSCDaCHSC8eowksZGEWVQMsUHj5XMtQ7piVXJdiBPVKF",
  "key45": "nKopRwmcK8Kumc3ZGfEt2vMV5eEnMagqtnHNQrmUvDereGwQVN67skQRD4bHpuexbrrsAQvbTvjhroKUBZjzecK",
  "key46": "2fo5mwt1k1JhCMEb9HfD2LP6qKDHk6zkua6hubxmz7TSVq8VC6gVN8xxsqp9quUqyMDiSeaUhiNFKRPpt9fwKoKQ",
  "key47": "5JTgbkH6JMUMDpR6HXBLHnWo8etTiKQLnptM5bAYfQo6nAurjXvjyFDHKZYfrp6JJEjaeMNLws9ijeqjy8dezgck",
  "key48": "2XWubUVaDfzHqPeinuGUjm3YefAb6KzHdvvKdpFuhyGrhHvMGouYnTeLoTC4e1bcEoVK4dbMmmXmPcRwkRD5i25X",
  "key49": "3rribHzsUd269KkjQtTzVUzdK81ozv9Ey945GwofRMZfTmxYkPTS88N14j5ygzSktMqWCvBZnYCV3WLFjmYR3vyd"
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
