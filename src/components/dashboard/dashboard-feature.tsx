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
    "3kvxy9NLsny9CBusQgSgE5aeS9LPyCKvdJWnMUGciQrRjGJTFhUZK8fpNeZZ12KL59zn82QqQqJuKaSWLyDAKi5S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jYd7o3rFMUEpsCJKVqnW9QNWDvSRL575kzMYeaSdhXmET2bcmWgr5QYx2fZAs5jQ2FMCh87vHpnd4Fw5bDTDgtS",
  "key1": "5kVoKeEmPHQEJ2y533juVv7CFVRzGWDCjKh8H2cQFQnaQSSjryTKKteSxbGLCoDWHXm7hPTR8HZnEYcu9Bvsmz4j",
  "key2": "3pEPqRhzFUbCS1raS6KBps81fdpZrWhipYWSdKZCUt39YuCwEajbfps25SoRjcWRCSwtpUdR85Dn5aCmRWVAXLDg",
  "key3": "V64S6nzLz28Uj5Vrq5QViRaB2WAV7KMberjGha7uPc9Wy7sD7QH7z6zwAjq8i8BajnHH9rJGB8buaKiEcVeeGZ2",
  "key4": "FCLfTvoavdh4RxaYYhjdgmrCDGDzim7hkPxkTzhg2tmuqkbBsAxY6zKq9xoJmK9yYMWY8VPwjwQPdpNEfviJ7yT",
  "key5": "3qnfU3QqtVGg6LcPBkyprKkMDQV8syG1uNuT3trzVwGWvEQkFN99qqQ31WgFCmZUvWrx71iqy2yJZhzddWuPNWHL",
  "key6": "Dw35qBBYt2F3HC1wzV6QdJVZpCUbN6EoTjoBGVKKJN7fbsPmSMnjJ1j8fVWG3EkCmB34fJ4EVgWdnUR1VEg6eti",
  "key7": "2WveEsxrPUFopardwARy6NkGedt8dpEBmHWMNQkEGbW9sLWhpAKkhfRi149u3GLCwmWDVh12GJWMsdBJfSxytLMM",
  "key8": "3D6mNQaifYqLUHGC5faJLuCq83AUraz7391bUYhTHm14HKbP9Ng4vRVqc3JEBZzUpM1KSrEmGGi6uak26xZu5S7v",
  "key9": "w9PtoosiAcSa3tFT65XDE9umZLeEgdKyTP4yABJWDT7DfyQywchmSkU8rSJgSjcNyVdu9iZ4n7SCPJg8LFHvK2J",
  "key10": "2LAmCzwxsqB3S4c1YXZXYVJEaGjrNNC6KkCUaz161kJUd1NJSTXUNFu7QLh52pmdvW34CjNg5vuGaPYvWLueSE8d",
  "key11": "5VHQRYYugqa9QBSDuXgTkE4a4FZtUTho2AmQACwue7ZFjjSSNM9sBVfvAJx2eN7gMudkuMfTZnVhMxyBxk2b1448",
  "key12": "5E9dfoZWZYJcsWADKJYky2kUZnGLxgcorS6StyQ4gNTxChQQarPQCATCzmef9D2Z56qqW7X3CHGwWxCoW7Wcrezz",
  "key13": "2KcFPF6rD6a3Q3SxHZPL4Z4WFEWo9sMiMWoqybUojuHarmRDegJKZNF8ELfKUw7LumfsSsYsEV4Abv9H8XDTDpe1",
  "key14": "58kryNQCDoidywDsWgaKJoAEFZM7CfeMpsij5unT4Uj9B2dA94P4mf3yYdTPsyfnHdAGhNiymTpey9btzXsFVbfw",
  "key15": "3oncYgaypeZjaUfoxaWuanXnh8raZy1qfPCRZ8BP1dSi61FJmUTrZuwEaHBV4Z5Fhg3JckofFQtd12tgf2WPUNCN",
  "key16": "5fRokboNaU7LpUewu8H1aV2mXJrZiHFQueF3umRCmau6Eti5DotaHQ8oepW7ZGZY6FR4amRXyCvncSavefUGwYgq",
  "key17": "3T9381QHWVQrL3yjgfLGhc7SfiSJhHK37SiRW5QeibtCFoxxFPcayw1PW5sZ87A6mpDPyFDvTktZzMjatbrmYkEc",
  "key18": "hi6FRfZg5Dx8p892Up7BBRCDqhoxtJebRcKmNSc8ceUKq7iSwJSGN4MYtq53MjY2qc2qNW5f9jRVdVg7mQxaJVL",
  "key19": "2YMU5MoR2VJDdHsWKXkDRMyCKk4H3CCxPTk51NzMoWAnSDnV8vBMtRyTU9VcohVf7aK5CUnNSRGk6oxqicDv52Pg",
  "key20": "3BK1vA3MNFRiD2ALNq61X1BBckbvXejMprkTxBXfhNN6vr7HukzCjKuC2hDzurnSiZnJnY8zWHRLMdYvB9g6pTZh",
  "key21": "2u9RFik8hfzixTktn5o9GtHeD6iU5bLZWNYChnySEKBheyVyVzs6CvCXmcDWfiEEjmByqhqeLpMzerK6mJJSJZrG",
  "key22": "37ww5vQQBfu5krm7AqQc3yKCegRooVWqd34wwerMMMhqnC2shEkhtMCPpgYuzvnTZCBuRXvTsUoGwwszAgfqSdUw",
  "key23": "XGUMYJkL5a6srjCMgJbxaktfWRvcJ8v9zDmLRBfH6bzMmDZ9FtL5DnwiyFAGSg2r9ix5Ripgt372fnS97Qp4aSg",
  "key24": "5aWgjctfXAZ6qiq88L8cUrXKYe7WyMnukJiD4fFWTRVW7Dh2qtaX6xHU9TPnQ7xrAro51C91KXyuA7xNrJfKTWys",
  "key25": "3ZQU1mWJHp6vvZHa4M9oejU4xXnXdawaVyaFtVSuDSG5csyL5X7PXrDiroB6BM2HGF9U9PjkgTXiW91zRtDAef3J",
  "key26": "5MGXok44EZVgTn4mSYT6eeGjHkTDBwCNsHEna6CtJF3eSStLP265u3hZ7gTamLWuQZTAdbrpxCK2GvduHeGduQuT",
  "key27": "3S6CnUr1sEuAdpq2y1QYNFe1QnhjJGZQn9dYUdX1sh1bL98TxnKEfPB33DaLfoj4qBJaK1QMkesk27EUFrFP11pu",
  "key28": "4CWMnt5MPu1pXgCTHdKz1W328jygyeBoRk2A3VQk9AJMiVzywmhLrsaJm8vERGXy7DNUPE44ucqRSwFmSmrdtCSA",
  "key29": "XmRQ3eVfM74fQTof84QV3NqchwoKQirtciMZA4iHZ1NB8H9T55x3o2axknA4iA6VBYKmqWMCfrn8H8epSRZfHqh",
  "key30": "3rDxwJUCFTzCtFBMiyaFPf1UEs6kqDcSWXgaDQpKfKosCB59vxHwKAQymC5QM4uNMzDS7gmT89N5hrQNESKvaPzs",
  "key31": "4PhAWcahun1ch6zCCNK8BFC5s3pDmyUQMB8XtcisEDtJ4wEae8sG9TMcfYZNNQqR7pBrpjUiG4T2QtbZCQyT58XG",
  "key32": "3UecDpgLmF5qmtQuXuRRtHkQyZHCuLY8UrxrShoET4edBVtqvAubrpyR8ajPbrBXTpcYGHiK5xa31MyFdRKtXBn8",
  "key33": "44Ha8CEu7YDyNUVM7gtLkyCcnWWSCvJE6feM9VJhY8uuE5tGmPuUPdNS4fpXTEyz5EzbsJpN8QYcNEuZLDUmz86F",
  "key34": "799JaVDghBJpWS4pibWc2GcozHfdjuWv7pz7LSRZJNyrhSjur2ETG6AYoUPW6JQp2EmBVXkTVoZYEHEjahXv1dw",
  "key35": "5ciAphNWPKzuNykZoRchx1ckhY1M64ZLa8aDgZnJzDrEq9BaJg3gPWk7KUKojBd7UmmyLQtpnhrFnMPtpq9Pp3Yg"
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
