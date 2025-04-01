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
    "5wgp6gnGiGJ7ntnGaPuk14SmXr2knhZqXq3upSfz1MFtpgonDL9Y6Uh2sApNDFJgS1mzHiqpLHnJyU3xVBFoBKAT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TNupaU5LzUAoVYGCnN573TLe4cvFZbnfz26DVwarT3Cw1ZSf3arqsxFv7KNWwyrGB9HEph3p5mUndDxjU7Kep6m",
  "key1": "3KGcCaPZ7rYCayE4qfscyXJkatBazw1m7pMWDnbq9YknXkLNkPGULFz2LcaErp81Cvb2erft5cyrCMyafiPF4PkV",
  "key2": "2hF86Ga4f6XdNkKPzKPZ4CfhSWyZ7muDqpW9mxaBq8Q7G1ZdzwZLHodJezTcVkUuERF2MdwStQB1Xs4ikm9SNJVd",
  "key3": "3uBGMb29wRvzubPaiFqqRFTW3fBUPmkFvFqC5N5aWmJUwuoeBiZjZz1xSy9KhforKiqQN7tdn4iubJvk36JYpdFA",
  "key4": "5uaRegg8GifDLHBXLMw8Yx8J24uzRjsTuzswoXPsEyARJAS5Krc58SPu2qda8EPFSXhdzZw3SJNzzj8AGX64WfnZ",
  "key5": "xXhkuQ8JZxqCK2zs9oD6uqLqniJ1NozM8wVgDUkmCcEEBQ9FGVAbdDVPSeQ854ktucmHyk2Y3WQPqtVhpMpspqu",
  "key6": "4Dm5ssPEMPaK1bXPrdBXbYoeb1J17kQGJwxgnMAiU6mAnFLQtoweeEGUC6MDzjEXjXEBwTfTHm4qnVceErKazBP2",
  "key7": "3ePqupTbUa4q81hbfA75oM5RMNkTTjLKaFvjWtp5YRd8A5aGy66wPLHskW8VShpfYQs1YECGbFYEJevBwNvA1Zt9",
  "key8": "5TRtNpkokYWQJxdmRCvNfP2dxYU7xvVMyJB5zAfoT1yUfkygtEAowgN1TmCkFVKcWNdr44Hbg2xANmFiFEkYCBNo",
  "key9": "3Nafvi7XsdwTnKXpj3ZawN5cguDCrwwDVqfkocLL7D9WTqc5gTY1cTLSUqdLQFQCS1wdLw4FyHKJqXvskjXo1chj",
  "key10": "4aWYBgJnr6aUPhnjodrtrLUL7VbWFk7o8mPpNfpS6D4XfYUHMJG9YLV48p8B3Wf7EcB37yKJhb8asA7jLy7MTi2N",
  "key11": "5C1HvKzz9s2gQy8e3GXRwoZJSruvpeMKuTYdTonXnXLdAA4XtUbfCkQvVrtFC7Mnjmy9ZBV2EnKRE4hEHHsFFtxA",
  "key12": "2dGPrx1tjwYjXFpAQHnQ4aLhfpeoaNJWLdEFrHxTXE1qAYhKaXukWvSVJ3ztiw1skibetJ2eeLNpNQkrV39Ffxjr",
  "key13": "62DAz1NP5MKogB2LjJDMC55sXwYzumHZkKRo3H8MJosT7rv4UPtXVStUE684uPkQtj3dCU3wCzXwatVN4CpVeTFg",
  "key14": "vEaQeXMDJisEQ2UTQfiT7ptCPJWrRYLKL35Z7Jfp2uoVvp2Cv3YjCxYRDVyEer1UZXazEKcFoBwpBQvm8GiTEu7",
  "key15": "3vrzpVfbEkhjkzwqZofsE6ZJuE37Ex1e24kMaKzgVBEwuAiae1Gk8pffJxvJ4tn2s86gqkXGwd4vawEibBgCPMw1",
  "key16": "2sikt4aWPAnTfoRri6my8E1hwgeEXh9WCy2usLntPTaLmgNCKksnHkVqTkpVdcesgD77k2NwHi7ffLoZNpRFwEhq",
  "key17": "5AwYYtVyhZsy3qnvhn488BmedvpqTuVQZpKUrHZb6xy87cSmYMrPPpw5vGGPKV1QEWPWyD2LZrrXaURccC6Sk2jK",
  "key18": "4zn2jtjCGfViYEfuoZcSFFBBNhYj72fKqkiMi7avp3AJpQRxsBGsNTNHdUEACrdN4dHjAesbYfUsU2XdqS6jUPSN",
  "key19": "3b1nsNSC55QAB1CdpbS5AMxptcAvPPygWuwdKGUidKJh2T5CnquerZXqL8WtApQNXZA66ekkg9NbH5YEKqTxo8oN",
  "key20": "5hDGcEtSecRB9sCWGNBbWkqK7LHPpwBvPUyAzGgTkFk1sp6nRZde9jkdKjzsqQkfWCVsPnoyUmPxyhMQchyPSBh3",
  "key21": "5rtEAow8KzVSqjYbNBM4cLvtprtfqQDKWS7ECZKxCGopMVTMPYfZywyDo2Nh53Cv5GGkjEy3QqozKtidA1viKxsv",
  "key22": "5bt21hkpD1nmCs9HFk8mjfQ2vjjRMp2cwUZ77PSgevcUB2bitv7E2KbUW5jkicJbTQuXoFaadWuaWjMZJmLB9FsK",
  "key23": "25pGTYawLZWCCizsEv6ykNdmbrw3TRF93pso1Wwo21MizY8SragPERSKQ9tpo8entJwo9EGgmvoPHMESKfcd1GNk",
  "key24": "4CwsVeFztr7p5ZsM3or5iGm5tJmoxC6UD3ieAxS4Cy2dKj3kaXNqrUoTRZKvuMcEns4jvGDY5QYcSUM6RAU28wvt",
  "key25": "4YAvLFGJRvVWNycmTD2iwQWfSF7zXoWn9pyLnbdLApDWx1TELiasNaHSLWHQpqQCfYYuWKtVu8ujjPVFUVL86EhP",
  "key26": "4sQZ1rSaBkw7RUC32BpLgjv31wjzwTsbfKE6gXwzVpmqbZNo4ZrQyDzHKcYDK3NziWfNNQwa3HR2oqaVY3FXTBmw",
  "key27": "yBGySpVFL95v5en4o9vRiv1saWaEVQHiVtczFFRnVKzJhytbkTz6o4YMrjjyuhptCkjvK4SutRswam3JXZACwgP",
  "key28": "2A64QZjEke6DZYTrQSEkUPSY4CCt89HHK4sUzPZo1h1oYT5qn6Sr3YSQvj5ncefSsE5pPjdjjqwEBA3KAax1ofX4",
  "key29": "5oPu75kf3Zuo7GeE6dpNfU4zizbhjj6VTYnNaFNQCeXLqCd5XDpnnhaf849JJRmedijU4ryFciY9KKVx3xP7QwCb",
  "key30": "4MS79UjacjsM7GHjbSxKAJzAUZyoc5DwiVCR735NgBJRd3rbgn8AEjc68HwEipYLtctgDcQzARhhKvvYE8Xwj9V1",
  "key31": "4vMVRMkjbWXT2YrQVMVcLQrkmyMb2ZP3wzpAtoMATHEpJMsk6RhhXJFQ9iB3kfnbEEMoTAADinncebNoTdHNrMtg",
  "key32": "42XweozSS5irFK8bwbzXCWJAgyNprNhNRL5VcSYj6d1QNHcEW5qvTUUr1y9x4cSH2uso4eQ31uNuuAHpYi3MsfqQ",
  "key33": "3UcDXAcAsCheYenLj9mbpzn7A5x3twXi3q3Auee8P6EUsApuBLt9GsX2wx3c4A9rqDKotivzrBWmg3upZ5hvHc8n",
  "key34": "Y11xz9Cv2xD5V9bajiLwdHE89kimXQf9M17d7dEsfq2HR7AteLdxRF6ukKVjt9XGBcULswJ5aEkZYHVy93wJ7T3",
  "key35": "2Um7xDxLhf8oZSsgifcSmQnnC3hfCEiqLdLvdXaNzpab3hYbxqEboo7G8rgrChksnGbnFRHYAmzAHCWqiJYCdSDY",
  "key36": "3VzFud89NBMotj62dGWFRoDwxWUqqMeCjNTKGowAajm1jVzeyJDffZpjf6piWv1bjRm5vM4RTDisYhWWKUNWTWY3",
  "key37": "5xwmcZfNQyWsYA7o7P3Y7DGyaTdb3VKEc59MyMeQPJnhvxTE1pMEjLWRM9TxDZio6H3rFkJM1SkkNCC52KaR8uCG",
  "key38": "4iyvCuEZKthA7hGkj95L7Qrv5VhnGJeru4DMm4wk8eB2guFq2A4K27Z1Ttw6ucs1fmZGvEWHZkpA72rrXaVthCvy",
  "key39": "LBzPj1nNwdVUwAWAeAVCcx9xheqeQ5DteEHvWWELqafL2DpjNt93dT58nx1sPiTzA9K5s6S5YfxgMx9iTU8Axi9",
  "key40": "5jyJ7cyKsbKhhobRA6En8o3z3XZSgHSw4EwKXkqg12MudR8arL1BmEU2KMNHS4enEFSSqfcQzYuw34vSmNmJQryW",
  "key41": "Yui5A4zmB2ZVv76LBzqh6k3n8nbaFiJbmUxzs4br9MBxR95NNZkp7QNQthHNnSyMTRQ3kb3xsBMXmp8Gu7bKgiK",
  "key42": "4s7boXqU518JtwUAaFkAtGw5Ky7jQDsqchFpQmhqPA6GDxdfJYW7rZQCi7MGz4xQVwb6JddET2mAx16yupNuaRWs",
  "key43": "2goD6HEG1JuHRcKLgugUy3Z6DtDHjmfkkkRFBynvmcV6RzzSjdkwma9vWB5RbdZkHBu172sEzzYhSRf6Vbn99oMG",
  "key44": "5RZ8btjtBzDgDCRV1xMNUogCdbQmHjN8sZi6AvP3C4rsbpKLnV2sYbbdAzan8kQJNaZSL5Q5BQfnQfMHiHJfyCRr",
  "key45": "r69pUM8TCNt3mz6GAQRZKu6tCbpnYQbBxmw1cv3LU4eyAVoECcGexcejeSZ8W2TbZRTFRdynbC7KhboPP3s3ucM",
  "key46": "5jZa11rwuWzoUDZp54v1FDbMD2BKDRCytNwQDeTReCw7F1HddbDY6RLxNttsn9vfJcZcWnLQY4KvXbghxASmSxqD"
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
