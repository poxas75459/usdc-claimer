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
    "5gUQNtX1FF1z58ta8VY2sBhTcGbqiirpyGjj9t1X1jAVUFe4rBqvSweXWQXsCnv8ymiiHkt9VxzXQT93HN1ZSrZg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MSELS1i9XFxTd93g7q8UDCE1KHyazW3cgTEebBNdFnKZrzL4p3AMBzH7GALDcYEuNPEwvH1JVEvjixrjQXhUt3j",
  "key1": "5TVz5RYoABiFQy1DBpEwqQDfpEkDLFCh4CQHxdkmPWxta2NL4wcDg7r1sgPdtMV3LoZRi7XnVmcwfmSqEHpZVGBb",
  "key2": "4YvKNpBQPSYwAcTS162q38PtEZehKvCn28fUwQ4pP7oSfV1DsfyJrvPzdmXu3jD58UpT82n1NCmJmAPcvjhGWCGK",
  "key3": "LwvNQQrNbsdeV5sVChf3D9Smo6EdXPr7mevdrrxmDXcrbUc8NCuprXsTMvFKVNVF4Y2oYK5FBksMxxeZYRLLfz8",
  "key4": "3eFZyVAj7TX23bpjk11zR9KiNYXcBjPS8ph5d5r7TabLC47qPbiGjPbK8wesfvr2YJmeo7x2jGBGa6hNf3ZXzabz",
  "key5": "45Am6YT9mTNaMGZUpEwLsFSrR5Vj9nA3rr2BZxiZUWV73cYN18ajVQ81XvpfyE4x1gtDpYF2wT9s5R2wtuDf72Eo",
  "key6": "EWPNr1LDBZ6HQgKppcdrM6ktShFRYnepvzJHpgWLMAou3xfvdwKmPUUWQTZHXoZSGnmooVqXxqYFf6ELwJkgaNs",
  "key7": "3yPQdMihQFMgwYCdBiYJkD4ZsbAS7cJ4dTSRdWzRym9ih66NVuXWxZ8KrQdHvoo64oChkgSKYheCVaC5dXyj3Z52",
  "key8": "5n4L6qLtBpVi77d8aaeq8U9mu9Ex3Tftdt7kyXCb8XmbZ7z2KxEWsxadNCNEbV7nmGXTZdKRSuvRN9MWMpCSXGu1",
  "key9": "59qR5g5QoUfNSDbGoibSYRiQt6R9iysi4JFDZXbtcYdY1oshwHEsQQz8oAyuL2GiYwDoy8JqaVc1GZqc1mRrj5wJ",
  "key10": "2RZBFWaiFZcd6viX4zBYKzZQ9WCtG7aePskopCtwd4m3kXCQDXnewginHNhJyXfeXt9468YxsNr8GsXJ4zDJiXds",
  "key11": "3hCTfU1bTPzaRFNNEtBk99TqDAE4Qv2Vo7AnETQfgP45W7pj9G7D39YZAgerECwXar7Y8KkFzJB7vhmJNkRtSEKJ",
  "key12": "4w8UzZvaQScb4TfT7jUhw3nr5AGsEqzr82scxetdmrpqmPw4J6y7JXbCRwzmD3v19NhctY5r49DnNpuBKxuFxhQg",
  "key13": "2jGTntsjAEcYdrvtyk1FyaRfx5VvcMuAK2u4R4oiYdpArMLSEfa1jT2pk5Qbfnvx5rqv5PJ6W2Av8gLNFGAj9YxJ",
  "key14": "4bjUdTKaaswz4jz7ARgyuQx6oa5HmRPkbfVsxwfBYDnUeqNxjtShJQoFkwyyyTabni2KHh3p1TxYQ9KoSvRWTtyi",
  "key15": "3utAE8dRjkasVNoYP31CZjhXNAfmuiDqbja4uVnA1LdaHtuDN7mzECa4GPDYnjWhiJAzgRmcJhBPcanaq4GUX4RS",
  "key16": "4mEg73ZzeJEr3PP9GPbqAt3S5rCy5yFigDnbvhiVkbCi8wV7gsjKFDNSWpprbg2wiNDdgu1VqHEGzekEG1JHAdDn",
  "key17": "612nx6fbi9yjY83Mcw82xvp2wvvBJ7qYGLnqjzYSdNANcM2FGzDwxZCe77UE4hcNqz8EUc75JfroTQLSp9VvSaAh",
  "key18": "34T1EJ7vUfSrBueSeG79tgZA4yCnBz4aMm8WpTe15j66TcEGQ389oaBWibbZppcPr7Bs9bvAJSiRCUZkKFypEfES",
  "key19": "eGndSpnNA6dEt13WkGMycWj73uaQpHihL6gtLuN8bg3A59LK8hbkBTX8zj74DqiE3tBhfdYNTzgpdapMUeCNrrz",
  "key20": "5L82YE3CWUSYXCX7DWwdgctjNYqnRtaqgeonpJC27LCyjptjCHRxsQNVLwtdnWoihct35Y3ywusLMDVXmHaoKAsW",
  "key21": "2KN4PBJ1yfz7n6NHoWtPfPRDZBeUVWMCkZ7C6vte6TRhXHKtPhrUvYj4M4hnhc66rVoHXEifX5qak36qvGn7aQbD",
  "key22": "3ESfmQGHMNVPdB8WW7Ddji22F467QKUf36p8V448g7Zci7e7izCRPm5ECFytHGWYfFcnzVFTyugzku71WEWVsZpZ",
  "key23": "291MN3T1Fiy5rcxBsxr9QR8gaFDnnirmMQf34f2sLi4e9WHrbpAfJkoNnZCPuy32zoqWzmn3MYqDdfMBWSAYawBB",
  "key24": "5rEKzecVTzavvzgD927rdgYJW7UYrHdxheh2HKDYYi34NsXSs263uL6W1HTfdSf3LhER1eGdQDfDG99TdBWQteoP",
  "key25": "64iGqThD8NdV94PxrC4qkeempECpDDojNGMjAtjkzkMgWfBXtEg4Dk1pcos2vba3C8SGmoqfyZhog7P1ZHyvXgqH",
  "key26": "2t25Peaa7wotWskxpcmfhTjJuGcaqzafVnvtmAwLmNutR9VHSqLbUv3ykKcAuKnnK5HZmQEjryBMyV9n51ADRQG5",
  "key27": "3VhciCSGEdhdfxNEje6E16BLkxr1zMenSPivzqcCighUp324V8RvyahUggouTYP3Dg711KJbjTmmjbmtN3jYWMTq",
  "key28": "61PVk1K32QmQisoZruNqb1bgfLGPCgvfjMUrTq9Yv3pgom7n4ma77iGGFZxWbM37oaCqKGZpfjy67qwTLWty6eyw",
  "key29": "35bEuzqCQK4JqSrYQWQbA8HH4gcRHP4QRXH4iMg6NRsdW1RhUgcjM3dBHjJfRtykhbBena1vCjLWv7iC739rnRVu",
  "key30": "4JP3hs93vjvWFQsPBzvDxvFV6z5poNMZERBCNgFwEkQGYEvGJfpNuApwdPsTkbNXz8fjHzP4hbisEAK8DRECuHyH",
  "key31": "5Bj72k95RPjCLHCo8UzTvLJcdxKEj8owK9MRh6y3SsYKRWt5UhqPFEwthUGpA94q2hZ3AcbGvCixunZ1vu33rTsw",
  "key32": "4QAPRigMxBMkRjMZrq8iULvZpX1LZHzPZLWDhRUsyQ7Yc2Y34ehS6iRgjH3rqSgTjYkiEdyDZjwo5bnRf7TNhSVH",
  "key33": "ToyC2f1XyqY7WEhKxHTEKQnCd2oCifZKdTkbMWG12DybpNveV174gwmtPZ47URHZeAsAcU6hHxCchGEMi4xf2UQ",
  "key34": "2erTPQqEJMvo6dapgBNDmCeRSVPFE3CCPri7136YVE86bTW7b4P8QVzAvNCMzdmXPmLzfr6anJ1BVSVX7RvGR38n",
  "key35": "5XeSnWnEYSkV8ADQEyZE7brgbqwBNAm97kpXsfogxh6EWTpPCKdMghqnz2kjDZV9YuppAR3ooMq19gDTCkuW6TLD",
  "key36": "kQajh5S8mn5t4BxiR81vTVfvdpXzC3aQ3QPGh6n8yS4V87eiSyiw3bRC2NDAQptQwcYze5D95wWPctqXm8vyEme",
  "key37": "5kM3DPoj79zKDoJxdpJxeRqbajE828A4zFMqPmZTjgtxbMu2ZLVxJpyRjgQsUwrtfNR7CU233AvL7mXw7LSGnrTp",
  "key38": "YXdPnXiLFHcSA3FWh1YHYYrfZgA4cqPBrofPDy9MT1zTNKxdnZFb8HmepgiUwoV5Rn9CJL6Eu19BwZw1U78Kcxb",
  "key39": "2gDzkrBxKsfkfwez6LQoy1MoCSfaVzov3QBYLefVYrdKfJEt8zZHeRC2LmvSQQYQsHgTZDCVvHv1cKa4QRySWWxw",
  "key40": "2DAjehyoA87oSLUoVuQ6oaKTSgeqEjqAwVnZJPHNHzgf5XEVLesv72F835EgErKwd9cpSXGJxnJXxi5zyTyoVdpp"
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
