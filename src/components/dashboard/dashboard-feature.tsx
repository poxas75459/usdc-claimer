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
    "5ZDG5xwXiqtnG9jRA4MZ9bEaJVWXdidYn4pmL1vE2nF9tkA8sCLuJc8ESch6dcQq8ydvrCaC6wS1tcmYVu4phRaj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rP14jN29NQf2e5ceZRQCpmwhgbKb9iRfsXHvs4YFf4s4HXXfw7TJTpvrJR4A4vGT8RgP5Q5JvR2ZDiXGabV1nsC",
  "key1": "2eLma54vmM9B1T64EEMzmdyod1LnEV49TyYQbUTEPJaYESg3BKMVxxFvR8zNQFxtoqFAoCP8sAQSBGXbBYuWDJdQ",
  "key2": "2YB6i5GMs9DHft323a2nkmBnnBiHKW83w61uYJXJgJUn2ZbXVLwASugKCVtzWUiQhobKnZcLGzbHYDP5XVCsjWMu",
  "key3": "V7RWCcYstV8nJcfs9bpkKGUhQHhPCFp719kobSzFvgFEmHBGv9VYy3emHVvaqSV9htHLwgAdVSczb7D3w4kvkk1",
  "key4": "5Qyxe8NfknQW39iM2x85tr5fNv9CZVzsfcHcrYAXSt8WjztW6LezdqvP9uvp9xJFvFLAUU26xjfioGTroYy5qaNf",
  "key5": "YjtVb6v13ozwWC7bEwBjVWfALnrxJ7e3xL32Tq49S9gfRFSWYfiWhEWngHGcF1DBrqj2GKrWWqxNj7fyN5QhPNn",
  "key6": "3s49U7qAGtsqed6aAyLyiRRUDxpJ2fayo2j9tsRJy7BaykK99Hb432upyiYPbh7DUqV4u4Nbj7JN5gZSS2eJMFk5",
  "key7": "WjyFqwpVTV5ii4eKvXeMvKczpB1y7W645AQeJr7guiBWKh3SFgBuYyvAAUjvN2Jj31fw8mV5v839Q3HCYfrQZkg",
  "key8": "5pN5yjeLB2n3BSf15EZ8dPWKkHBigGLkAWsbxDYJm8vw8NrjrCqNdHo55gtQ6cYiZvkpHANvogtxC4A7ifGEfkpm",
  "key9": "3ksFRv8fvNCbGbtiCHEV8oKUevrjPdQurA8UvvMhWKxSTnvzrd4cRBpTh34QoFYxE67B5sVPcWEoeGGcg5cUS9r",
  "key10": "mvjA1xbm3NcGZKYFDBeRz4CNjYcpLHM8W9g4CFpoF5ipdK5iBPrstDdLsgevQkzuJa1JFijiQbPTPmB3fYUSrza",
  "key11": "3r3mQVx9bSiAfLfk7gE62RRWxW5wCqxJXTeo69kpoAZcuAFJzKLbf6in6DMLxTsSLXZLX1Ek7odF8PocXKCbATPB",
  "key12": "2us4Lje5Lrxutpyqcuprg63NXgSuUgDDGDth1r8QEaiBUV9qHKG9kkmQziZsdwc3aae4TooJhsuKCrL8WSP9ss4D",
  "key13": "44SJLU7KxaSSzYdcmdqy9WR42AkPbrpe2CYj8QPsKBa2JohawS8pURDJnyux9nRe35R9LfMsWCZs4Ta3vG525P8a",
  "key14": "2DA3HGzcg6Y85CWEjE76TRAJJKn2BUH454YRSQhxA3w4oeSEpMfmYHEDfwpupBrFu9LdtTeTo64pEwoYauGZTgWM",
  "key15": "2fWVsQ7gm7UxKXABcMbpBitde2AqTajFwby2gRgCtmhMNTrxW5CNZcBy6VtNK43UYchEHsCQZEqdw2foQ7HAfKpZ",
  "key16": "2oe4gy9SyRtSMS7qR4t2xMCsznDsjUucEsEUZ8G7vnTwbAPgGojYDAvHt4XWWCYqUhijX4fia8xVPnmotp92NuPG",
  "key17": "3u4axiir5QVhddaKioZaueHuck14nsnMk1aaEr9jZvbj8Ur2HzTokSMfxWKHMs6QGq2qQ9GdnQMS28CGzXW6NQUJ",
  "key18": "2LR6wA8n8RSRyxBmEfnuP65LFzJkMNKvvqQQS2zczvYbHURLhyKqrY9xNtKMZ6PSV99CP1PLLmL3GKFYvfdeHdE1",
  "key19": "3hnoz6TTHNFX6fHB3r6xTZW5Kwxj83XAg6fX7xw3dU34mqjpPqiYBAJ3ai8CsucFH2PbmzdhF3dqwyrBqms5TsbJ",
  "key20": "YsVEGoza2L69XfQdodrmWKA5K6jZ3JZMeHP4oSubKTT7gJiMqfed4XQpLYBWtpxtufvg2jfQBYmutVHmDrA2tej",
  "key21": "7vhUGqrPdNF6oBFUuhct74XzqdsQsfwF4W8o43wiqLpaZejTV7RyRBadZAy4CNiUjB8xbz9KMomo6q9r5xTkAjH",
  "key22": "55YFVttkFPrHi7FcfgdnL1ibjXp2Qhb4SW4KX5VeaKcQQAnTYNWscKWRvfcZnHmDeRkygsCdXnzDjNZcvBbKPj8B",
  "key23": "4cVL5QAhLwZhKpShfF9qV85Xo8dfH2BhBpJ1gMSDpV7Y7uE9eCYEG72PAWbSCjeRDwLVnK4HXT4kuz4GQsvd2t4q",
  "key24": "LkXsC4i7JBQNyBvDUWnUEdmyk2mtpsL4uZJyLVuwwHLjxY4Ugac1myQ9Ye1CcCmfk9W4ZnjQbuRZuTRXrW6Ns5s",
  "key25": "gLTy3UhmyCs1i27CC8zWhwoL1Ym5Kd7gd59Hbwk3wBEYLhrbqndsDHo3PHVymH8PmovBk3DbEqRd44mahkgn1t8",
  "key26": "5zkQ53oEkqS221MhV7cwQHA5BPr1WAMvT51ApN1HsjSAawZyFNxHqfTJMDVJqXRUPjEEqMWcKhehNuncYQBZLUVA",
  "key27": "SdxhMyfbUCeB1NQ8S7y8atpS9ySSHLjTYroiyXbm68Gs579pRZfw7qsfQu6pL8q6yfBS4DjzXHJfZ3A8w56KDeb",
  "key28": "CD2Co51YjwqGsJBKESHaiZRmFL7VpuZ7aduqb56NXweryv2mNg9nuqTUKNTE7ydTPzuztemwThVEQsQbtvtPw1D",
  "key29": "2z1qeBr9C9crshx4PtXMM4jEBJgkMA7DRciHoGiRoZQYgMRNtiJM5yR8xoHqbxRpxrJQFBEXZ8awgHGHB8LKNtSb",
  "key30": "5jVgw5TgiULLMFXWLa6vANiAfTPqXizm33NLykFZsSgQYbcfA6oYGiAUX57GcQkga8nct6wMNAGCucby5F21SJb4",
  "key31": "2skYhSTJBzPkvaTyqNEX1kYoGnQev5M67FVkyUe1p4Kg9QXxAFjfLYFfHRD2RA6jCkQuvRvsUqKs1zHQNu9Q6MNP",
  "key32": "4uX8VZ4tHe6KwfBMWTJ1xZKrruiKF2ZYDBZXp5vqyNYR6Ri3EKrNKgciwLiz5cV1U89QJZeT5sNS6Gi5rJ6DwfPq",
  "key33": "5PbhbgYNW17dTaMZKABs8fVeGA2cHqjK8ZEbUHKfFhYi9C2r7MzcFVD5PazXJWDZ7grq1EVKSvjQ2QovX3oWCgzx",
  "key34": "3vNRMG7KExJ6DYUCkXtwfkdbnEqf8nnazd8qUMuUhe6Dcc5qKAWQnTPDzTDaijNGpUqJWVz39TYnJX94iSnDozRr",
  "key35": "qfKcETxA6ibvtfQyAD7rMSeMFMLK34jRsETixxFLVq13Gf6VKKydwRCsUq74aLMkTkFe2cinYfTyqn3TZt85iNN",
  "key36": "5EJfnDBTMuNJfR4Pt3pcuggZnTmxF1qV9f5LLdZigmNqoLxiUqqkrK6U9nBytL87YUg1fijmkZYWyMFUwp3mtQbL",
  "key37": "2zbqsEj37AkHaHTbQtgCxWcPPEH8dc9J9CSiG71uVAoproder1LY3Rm6m9pDm12Kpkt6qjk7Z2AqqFWsSLMq6FrL",
  "key38": "5VhPWVqhVWt3TRNC9PWgMFtQKt8ZmaWTZnQku16h1ZgyuqKqiATW79D8pmYFzA4AVJymBUbrZ3gGmhesdvFH7xgx",
  "key39": "3esybxbbYwohMADsnnCTFXtimKnxQ6ZwNQXVCvouFJz7SL5pm1FFsYqhgWYC5pb2QWyVopj2NtYBPvcLd4hkz7fV",
  "key40": "5R6uMzntcz1aMxWpH5F5vjA95zTxooghieGqc8YWGiLAktQQSoh8sy1zEGw8yXbhn1QbbHEgj6JMQh1kQ1RPgtML",
  "key41": "2oEWeKockfXdEjb3ZXHYJhafVTPcXyrPGAGixaZJAuU6nCrwmoPYTcrGE23dEFL7vSjPmLAXXpXKWcHqzMcjdq8S",
  "key42": "CRRtEWW6HbX663Zvbny7y4z23buvxoEVjWdeBRSqjnz4RCJsW6ToTgiGL6ywTic7tpBXdmUs3n9AZAa7wDEwn31",
  "key43": "5Nc9kHcxRRnNNi8VtBvy5nYE7JXyb4DgK17BtWrtL3YHGekr89Gi8iV9APC2hmPbcobcM44wyGeQuBZtAoehjZqn",
  "key44": "5bPb7Qkg7axE4KwYv3APo6zBE5qEngwyVhsJN1b8B7HFybHyqnv9zdqKLXvgwYYcdxFYhMcvcLKQXZaohQDzzKUu",
  "key45": "3KbSxB6cxYdcLEtkLnBKNDAp6DdFkoFvBwpcnMCB3yqyLEUeeTf22uGi1bojBy1wT2GdM169cpCneTbcQfYzMb9u",
  "key46": "Bm2SCsLPCYU6VzLLs4q35RtcbK1sQy6gQKiN3SHmwoEY8BfTykTb3NLCCFCLAYA8KV33vL4SJ99cVPmMBsfZ85b"
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
