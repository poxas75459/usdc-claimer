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
    "4JzoGsQLsLeNRfTSNjpsq843vpJm8d6rTY4iPVqDXupASaWEiKNzgbdm3TFtezBYLE2GBMZykXAoSmo4w6oXGjWF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9MJZpgAHoa5f76Q3WYc5EQd7bPte2sChn2gcax9tjpzghHh2oWn279fy1eUpCUXyWgWJFfKQvZsVMuy8MsFHjTE",
  "key1": "5vMAXM8ZRKqeRGjTWCL2udh5NaZ92F3qp6dt24hnBghVNXEsax8qFneZw4qvMSaCW9xDecNr77Me9ym5QwS5pxAk",
  "key2": "x3KtDi3o1e3cnBhVQmqLXdb6m3vFjLkpyZY3iyx8Y4m8GsvdTaJg6Xtbww2RFknhqDFHVtpFfjPSruJ5SJboToK",
  "key3": "5vx6npLwrC323chrnmAsqoA1eWhUTLf31dQpT6UA3v7wx4wWef3M7JNni47TXAK3VyEtj2YWxnAdL43TEGa2Hi7R",
  "key4": "jNZaNvgoaV1M9dMxewXNi1qWutkEtpmUgzTfke6JFPDnp1xjmf98udEQp1QTf9LYLYvxr57TCttU6WeEuLwiygb",
  "key5": "5mGpxmARwFYLz8M5FywLP3KsiHKqT8pyA2nhqepHFJhudXTdwXVfsdnKAEWpTwqiEJnUDdrovPaM9LTJjWgMvixW",
  "key6": "4AVopi1i5bSQQsNamgAu2AXa9aufruh15CXLjvvD6eYasY9vdNuyQxvq3Xoe5m6DtQxTY9byTyakEiuwnagNVmMn",
  "key7": "221FZhnEiSkCKW4BKKbqc9PDCTNK7RFLhKBupKtw6GDaRHEhPE8qNCJc4MtCVdaN5MSCe7EXqsN5bBC6s7DP4Awa",
  "key8": "5Z7XbUjD6Ar7jPcdTBfwvxvbCqH8dsRhNUNi3vmusehM9PDhYaCXrpzevhczop4iLd6H2s2JSr3HxgY8EKEa3S1T",
  "key9": "56iSbe6ymkARYKsBk2ht6Uy9uhDzJjdMYsbLzCbhb34HuJvmDyES9YFMigQFxTGVDjzY7p4mYdfh6WarBsBxdm4S",
  "key10": "5kGdxuJuXZykYpkxadQZ3CzzPLzAVDX65i2YfeN2ssDMVHiHJT7HRezEYXxsFvcKDRBN6PBEmdeUJ8ha7M1ENNSC",
  "key11": "4FCv7Bk4u3t3tMmLdEPx5LaRS2piKF8F8aMQN68dbvcA1vuNZryUgfiPAugSA91KvZMFBSDL6Akai99FdDU57dJS",
  "key12": "5G5G5ggn7HMb2WfaT4g1Cs6QD16NXLp4VQ18WMABoDub3uDazQ3wQKq6zC9SnMvQLxX6aVviWv57EMASYRnTWicJ",
  "key13": "hoasZk4beiFuzzSQ5q978akeRiyv1CaV7Tu5fWC6zD6Vvk7fH5Sz9ijWneCN4W6ToYymbW1wy5poHRmiWLZSbYY",
  "key14": "4yuXxVYdc8KsqovZpCreAPN7gEtpRCpgtTbsAWjCYvKTpEKTUKnsjQZGadZuHuvmg8t8ujQxSTU7xUij8UbLRByK",
  "key15": "2iAjcV3mDZqtepZZuaLh3Z14mVSbnEW9zoJT6acxrcZKcVe5TLy8iQibJ4xfFyergu1SdoEKDjk5NgoMKvWLDPnr",
  "key16": "5sdqg6r6qksSSTajKM8BygbKzkL8ADTY6666psbCuuLusv7RhFvcrkv12BSE1dUF4JQS5LSMsS5XUYJ3EUmCs88b",
  "key17": "2jANsWLtupiRFDDmQWzEsDKRXnT7krbhbCwMEExe1xERNqrDRLs7MUjd5tJWqaRHgYBDhYGFin7HECLycbhKFeo",
  "key18": "BhoU13TiStLfSG2CcyXnrUmTkjrM8ppq97mdPQZK7kC8qDJdhdfghKNVTyiL11TuwfZML7ZuiDeEr4AtR3kjdCD",
  "key19": "yfeBjKoeMsznEebkaahWjjXvGnUM61kEzFxgSWcUhNxYZSk5bVoXomkysDFFJnAciS3icixX6Btdwq65PBkZ5Mb",
  "key20": "3MXXW6unCkxoVZzXNqbQDiZWJe6wdj8vCQEkFRNtfi9TJD5TcKPFpd8DsyjLEazN5Wd1jV2qcufFg2VyFn9tf56t",
  "key21": "5bs9MBtCyBRhvm9UqorhCym1tzjMkupgrtWNg5LETDbCkxs3u8NeSm7UXU5kHbTFGXvCuGEHi7yjtBcHvTDhqhmB",
  "key22": "58qkqiSHNtJebtmQ4VUWBr368FkAEuGeDaQYYm46UsyJyWaguEydUWTFyGaq8YtbV2ADQHoGZbdV9SFMfrZZS5nL",
  "key23": "5wjNAbRoHQ3jR76i2VWg32aULJBAxpEmwdmVKmPEx6GcQi8cHUyiSp1E1e5SidWek5dnWn2th7Qxwfg4RAqeyGRk",
  "key24": "4R2ixaMoY9uLWgSNhfegNtwAt8UdUFggBMLd6rxN4rwXguKtmqqV5q2ayLmKmP6yEM9J36zy4gTzeW9h9bRP4t4g",
  "key25": "42QiVnUJuZ3tZcJf8FZHaCuCsYKGTYMQPCppB5Bgu98bXpjz81dtis7eiZhQE2ByMSZti6HdAKvw4G3YP2mjcyjs",
  "key26": "3z6jtfPgu5653ks2yL7qyTqxUFCKWqd4yAbMevzprXvZXZCCBGe3vQsmZ6oK9vBSzwSTuaJutAXZyMB39dFUQ42o",
  "key27": "2DK5Ljf9Cm28vqptnDoSsAN4W2ZfR342ZQTZCrniooHAKpxGcXuyh7RrGHAnwrADvu8RcMYmGCoLwGhcyBLN4iRm",
  "key28": "ZzULkiDNa9UegtXg5rwLjJj6yWSkQF38gCACRZLYtiyFgeAQqAHhDTvHaA3yN4ZQfiGVjAzCEd2MQrTDiZkydY8",
  "key29": "2JFeXozFZKFceidaQGVZzxJDR5csAxKV5HBTx5trxvDBZajvg3GXpmULmU1xJexxCiA2ZzVBrRX8r9Mz1VB5t8uL",
  "key30": "282Z9ss5xnSsUFQvTvYeaLGx4uxThYTnvEMpT8ZNE9QLPKnAw9SA2ngp7bZvgTSNwu9BNkqSwreuHSJejW9pj3rP",
  "key31": "3MZsex38E6mZcBRDsfeT5GT7NTxC6cenh4EQGseKVUV7gwGLpGYE66ANrTfxrmnHWp81NxneFFMkcoKNsDm2x4q2"
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
