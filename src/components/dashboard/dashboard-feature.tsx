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
    "5cqWYqw7z23nt4qJmuPNr3shda9xqjkx3aJypjT7vvsjaiDSzDN26DnG8z6qBbijQX3Dv3S6Y5YAdj3u51a5HErW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TQXBEEZ6fEc7yMpB8L39TweRQfrxyKZdBozvx3f5nGZP1xoBZ9kQoGc3D8eRGHaB7uRKiPNttNiCeif96BooNXz",
  "key1": "4PAS1pcnG9zAcMYB5ao86Gt1ooWAu4Q8JYeVRNYbgxNvtzV2dxrPJHAix38WLmsdhkH3Mgf3TScsbF7MFa5sjTx8",
  "key2": "eHSEdKcvttKBsJTdwQ7biLoeysxha5BeWbX5LjdWVC9wWC7do44CVd1Xu8DhHmFsC5fWHpVnUqovsJpoPotNBQt",
  "key3": "63a1LAdv5L4X7aE6chmQk271g5ChkZYh3RkEuaSrSbP6fqd58EenCPhvSN9UdHp9xySJpHMrHAexL2uWzcUy5EGR",
  "key4": "4r6X93zZcFsNmTq6MRhauq26L21NMDtbWhWJkciG8iF6WCo6VDA5945UvGK5gZ6H1Js1ALuquSD84AXwVro3nJcU",
  "key5": "4QTGLRWeMSR7tpLxiWsGbLxxcwufNBL4kd7z13uqcArTUSvy2aPxuS22tdVBEw93WBPoHRFgJDupRWkpUzdJ4dDa",
  "key6": "4U6UdkaFkhf4aGRZtiocg3W8geFdkZgoKU3ntPy516B2xG88u7dTWrEBityAM6phD3B6nrqre2KgqZapf9qLSUeJ",
  "key7": "VikjJPykgEHdABUoZZj4mnU6kgW3b2SqGDtyu65VPeK4u5UYMB8qaz6Gijfyekv6dUF9ih5LXKmYDHthJgzfDVF",
  "key8": "4YDnBkgqs1JYJTEAwsJbEJYJfgCsgtKjwRJpQzVSyxRNEf6SHeDHJe6PnEZWpw8fNabRi7VcYAEpbWesmvbHnA2k",
  "key9": "4HnKEApm9fGsxdmTuw6Tja7xhR3bfSRv7ob5779ZrNdS6QbWs58bSJEikQgfBMrVMSQL5SsyT1BVCHZubZsiUPqt",
  "key10": "61uFTa8LxjqkZMTR2U98RFP5hBbKZsLNgseXALTTdnxhSzVimyPy82dzsarcG25J1iaJ23nRVYFMa1BdASn2xqJp",
  "key11": "2f4B1pGXtqnzVFaQN98CrCCJW8en4PShZnjxLCYmfvd45GzARa6jRguoLy5SDKE6Bu8FU339Kphu8bmtu6apj8Jo",
  "key12": "2jQciwChhcTD7AyteG3Qv89RLdmJwhmk3TpbRdm9FrTecUDhcga4q1zDAGsN8XaHMZoZChoRWUq7Pz5Zgks4FD1f",
  "key13": "2WMbJDZ6ibtwwBvit4F49ofZJjye4wEwNHcQatDUjEdUkEeQzpaKvGjwrczawf4Ywr8K83E3uJQrAvdgLeyiVies",
  "key14": "2MMj7Cy5QtnPsqbJAHpbA3NFyiJtmnsso8pCGuwQR9qMkWi6xV1HP3M98Bj4926k8zvVrpSx41aLvBXwicVWK9UN",
  "key15": "48mkGkHVB6uVJL96BXp7uLMjuYpy72XkKcEnDJPuTePFmTM5pyVLZCG7xtRXv1FZTSnSTCrbJXb7gbeusipkBmYP",
  "key16": "65vmHNWMLC2XKcsdN4dLjvUCdYbbwHUTrCo2PDjpEQFuvHkhc6y78pHgop9Bddq3gQLLAVSpMnnSyaHAZKSQ2ZN3",
  "key17": "5zkgEfidMoCBGf1iiYS7T9g2BNEfUMWsfpig8eZNsQm69cYdFz8Cbzqz7YDnWgjmHGPTVRgtwGpizawtcS8xV9yu",
  "key18": "3gu29mGeNvPhpxZxW8mKJoXx24vHkRG6PPWHGQntxRzCmCGCMx7x7KwQbUjsM6fbXkCqisKvRvyR8e3Wr3ExUAam",
  "key19": "2pYBVM55QGpoB7snzJ4az7T3DDFQccMPzacrzGHsjS2oJjLEVmaVkz4V11XZG5Nao3Di91VKNPz2A5zLYAxmkX9c",
  "key20": "62KzdyRWDmqX3QjbwiuMJk7N2XiqyNMS5nDKDrqjGstLYApbJFNaSqFSrrCuVXctNU2poLNxpfRoPJFBZhxw6TJB",
  "key21": "5mRThb3JhYdxzMCJjaWacdnFMuwFY7VaK8V2WTWmFqXKaxdZ3Tv7P6QKP6P39nsh4Wq7KCas2Yfk1416YrJUgF3V",
  "key22": "DVUDzozbUM86aLada2MgTUMZCY4WEG4xpZhoVpvzXVnSoz89SK7xr5E72uJWv7Bs3EuZSbXJzK1GnjymH5qVSmb",
  "key23": "4twW8CYnBmhLSGwvaMvbWfcQc9xuyYMs2LXvytYNHAc1tE4GtHTsXcWtNPR5vb32g8jZpxh3QczPdckkGSDvuGqw",
  "key24": "3Tj55HsUVTpVT9XtwWq7mMyGnR5i1hTMWLZ6a6Y1S5XYY5WytaB5pNZmpr3gVkhbAMjN9EEG41ss49dzuCjq99sW",
  "key25": "5Cnoqfo2vbHXSB5Fn9bYLezMBh6kbg7nrB9FSLGcv8YhTq6vbyB8fGTvCLkU2BqvnSi76JNrWapJKPWD5mrEsJ7w",
  "key26": "2HfoBDsasarxkNMegXU5kXmfELEeUr2KQeVDqEz82EYeS3WUsEGSFHLmhv8HfENjjfbre4vx3kLrR85XWaawuyP",
  "key27": "28X9UNafKdv5DfBDuf9EEb8bDdxCgVY8pvLwdG1MQ8eYZywVDMSz8WXURL81u7DcMYuVwk8XHmSvjHkCkXnFXnno",
  "key28": "4kSoTn4z1VXodsvtFnTbAvNmP4g9QSDRjY5kgpuy5u1u6CyZwDZBL4KEHvFTsdkuX5eGHRAhdraxBuYaSuWvj72o",
  "key29": "2r3GHReQyhd7EbmrVw8zyEuZQhf3erLnA8uDXrKWAHnYjgxRbaxZi2syXZjUq8u1APpii1dup1rpUZPK4DGfbhvM",
  "key30": "2t2kQ57ebaD8SL6ijnqWt18UJpsJP3jfViYNkeA8KCtQjui2stJMHKx7cFHf2rdCdCLJ55jMejE4L9NPcWEcMhJp",
  "key31": "29Jpe9UVypBha8kteF8UdxM923VTKYra56sxgknAaxrX31ZJUwGWVXkLYPJ7CDWKGCjmGLRMWBDpZKzzCzMa1x3C",
  "key32": "21PDTaqxnry6TZ1E3Lxi5BSzuRoCn7a69UzNTtbRbG7PU3fZ6BPHFVp6fAFN8Yhf6s8my1RAN7UfW5VNba6J2F1D",
  "key33": "3TDo6gHcWjFMKQSFjnAf6pL8QPjcQxhnGaTLAMbLS9k6eGX4f8kYTC1SvXZJcCqrzb6Zjd8imnn8V62pvAAjKeNZ",
  "key34": "4kUodV4ZeLcnkzbeQuJRA1PS8669bCdqiQtZJeZnd7fy45o4ea38BvyB6E5dfLEidJLRg9CU3hJozp2muE5roQtv",
  "key35": "BoNTdrR7LVKnf1hP9wQQNs7hqeF8jhq7JLXYMEELVvAMQQJKVEoBwkKKPQaxQU1hDkNwmzt2TDe3trzMVffZRzP",
  "key36": "57VT7hybQaUbC33xAR3tfC9GpR7eYKTV1vJBueNH9v18X3sEFr3Uz8c4BssW2NnCBCkho2nBGi7zduJu9cHcPhgX",
  "key37": "5W6vFQCHheLaJ53LRqraaQkn7gVNpF4QborCg9eCnv9KLPbmtrvuZxXdSig1z81GASk7dYZfR2wd3EAw7LaDrr2q",
  "key38": "2HGxjQ6k1168UaQanymQjCZ3zFAqogUkk36JdQsJr68tDd7FcV43EF5Pe7w26eNvKpueeyn8gUXoxffZx93rFhXH",
  "key39": "3wKDqRd8T4NTo9uknGyM1JUP7AsVLb6xuqKwTvsoTnQ8iGf9Xfgfh4kN6A1V4pFVNRNMJ2vdyvC36dgf7wZWz5tm",
  "key40": "4CKyuzvKsQb2U7iCa28jntmjeKw5VJhR9J7BrEFKRNJBAtsLvPT3aKPb2a5iTTjVoweu4oPeBZJL8KzeqTYnXmmV",
  "key41": "5Ho76MjJQ5yrB11W1dRDiEshKtwFMcsLokPuef8Cn1Tu1V3Ucx93LAgTZS1bEmxD7aNSGTZSHb9dg3x47A38jDuc",
  "key42": "LJdjRDDZFZfnk4LvpRvvyNFLSDvjMTxTqM2jA2PuX99XLefPd6kYeLk24ZK8c4NBSoP39oA13ukKHDWQh82GC7C",
  "key43": "2hCcexqu2PAGZBAV3XEDucGTQQaGs82kbktbdhtTjHswqASk5oj3AWV5P27aJU9GxSdpxLobFDYZniSHsxgBpN4E",
  "key44": "3sYkAAMvq96CmLzt2r5BivG9A21FgrovcdAaUDTJYwsFHJD2niqs3K7vf6pidBaKrG9n6LJedms2fNbEdoQY38Ma",
  "key45": "7xQmNggnsU6Y6qToqiPuBrTAjJforW15yhDzFB2GRxxedNsK792FTnFBjLHJSXp43gW3dDnGykER8Usqss3nab9",
  "key46": "uqGwHR59q4QDjgEUPvwpZWaXM5NLzow1Ja7F57pop5pNNXAMu321mjDmbTpXByKKVCD2Qr1T1mPofrFhkNNf6zR",
  "key47": "txTvdWQSTrkpWdVLKaomXCnpoDpaaYsVbs9PnS1818zUfUH7gLcbUmmrMDqazzvXDdm5886uV1yALvN46sMzF6d",
  "key48": "YMi6osqzP7YnV39KXFZRS7vgPJ93PNSGgBLUvH96g36Rw2tkeRVWkfPhi6XpaD3LTyh9GgQqUi3CQDUMYLguBK2"
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
