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
    "4rat9jDiDdo1LzPryKVXyxA6w31ryyYSzNejgBaKtEGMzuDdZ8WZTPakzEScvzafH4AeYSrftTX7LaE7GoZ4p6bq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zQMw5KYyFU9Kbbp9CpdQinaHm8xZFdmJZ6gDPR9Sr2hRXweTzxGpKx9E1XSfgHDGXSquH17WqRLMBPLFvr6h438",
  "key1": "2c6AfXcxFhUFBEJFUrJRF1TcSzKTYLtSz3wqDvF8x1Rbp95SWBisxhTXtLh5pnbFAEJJea8Ud9LzgLNuUYUj9SUF",
  "key2": "2N3jxMcywrQ2FEYjQhDwzC8cqBncKYpNWJ9k22hsauffjoS9x84FcrxshqnLPcEuTxARrLZXLXRU5TqMdpvM1f6K",
  "key3": "5kJeGxrSofYaeSBioLt4TSRiCN56oAZqAE8TDxgofAv34Z8hbJaUV7F9j9paryqS26PKvf4yJ4Fi1jvpHjSepZGT",
  "key4": "31YPSLYaDFDvqn1H2dEGFnpYGsFnZFtdJpRmG6rzo1xdstM7XCjCZVrLfpGy2P13v6VzJ8pYaZPY222SoN6pBppA",
  "key5": "2DB7yADgEPGNwApTznWiuMHeUR2fPdt8ZNotn8rqgHhzUbhMtbGbZQ51Dr4BamiKLmDSNHEokDDmghv8rcELMbXo",
  "key6": "4kTUfy91dfYE3EnrBiMpSunFtgH4hXEJEG5bJDwTVVki9xMMbkS1m4xqKNJSKV32mLMehmmuMy5ik89DAhW3FoqA",
  "key7": "3WeYZU8KSruzEhAnkK46DxvSJ1hJvSFeGAZQMvZR1dtgAwGa6RV6oxMzriNEL7iySdK2YFPHrtpGxJvvW21ve4Ba",
  "key8": "38e5qLHEQf7dokK7fzm9aJi3aVpvNosEwme2t11J843pcaVzfhVNYgK9hVftg1Vz9mfR1facDJFDjNpESUZ5GjHG",
  "key9": "5NHRCaA7TPeeNkJLBdLredksL45bQoYF9y7n4zjg9zGBKTiE3Gyq5hrWUN1RBw29xBXQVuQM3DhchwxfEigsAQhY",
  "key10": "ATWXpfRevPaNn9B852wsuzC4ThJ1YQ6i65CY1FQHeN4RD3sMTpC9Z1Z9x9tQtMxGgm1v73J2E8DKoTm5hBE8s64",
  "key11": "5c9k5GZyMDjonP3G8zPP3mPPHqEvhrUHwHnU42BSphd9nUaHmVhD553Qs4SdHLQydcMYo1C8xdt5TdqEZ9m9iRuh",
  "key12": "37dms1ZgyCUu7Afs9nPU8SstPeuSqjWxyspxJwVfyJHRtTF25m9z2MUFZjrQDFkJaD6yoSPgQmvP1Ap2KqL2qNY4",
  "key13": "5UZQ5eCYpbkaHGRLcqcbRv8iJue1o1Eq7LC1zh8fSax7LoHJb93f1qNcKz1DYnwnC53fNDiMJAeYZfc1gf4yqH63",
  "key14": "2ARHuNhKEsJNimnmejXWbagJ1Fev5Ae58LVpzBrUJHUoKcL7fQahRi5oUkJ76GCpd44zBGivsN3FwRRxib78KmPo",
  "key15": "5Ktxe5WXVThGMcHB9xuNEBLnyjzGEKETxmSBYpavZacub9oEsa4nss7kCUE3HtCaAodSzoJkyH1vgT7Evo6sC7m3",
  "key16": "2CuQsmbwfrbcAfd4PsJf54yvADzTYwDHUeAYzp1BoHHs2UYLKPmT4uiB4zzVtPDBYNqch9pmSXAgNSonKjWZhyog",
  "key17": "37AF7QizGGi4XiuJPVDBnx7KH1L1hYmYTGQTrr2PSipnzWN9jCBmWMpBUBMZycdv1pB8ko7NBeQmHqHR9mZE2Tju",
  "key18": "2RmyM7pRmvuZH7ar8PRz5vkgb3PL79ekdWE5ggeaRbXFgfxaRT3k3HcvLAiHzNFi7raB3gCrn2x8L1QnnwtDRHUp",
  "key19": "2oo5kQzJsW9kdUp2iFDrojdJVQtF2BHjAskPNUJesejeJdSHRadX7FtESECqHX1NaEgwhuewQDUNhLf5Lixa8JsY",
  "key20": "UhLJEDf5HEDgESm9r5c4pFiNzJzSAerwuosQz3HajcQQzmEw7BBrZGYMZZzezkwcPDQ3vhpPBYx5xFDxcb6gLXb",
  "key21": "4TwJMCxovR4uRubzhQjmrziZbXQUsGEEDhwWwSgJgf4BNeUgsgZW3dx7qd2ABBnqWgpSP1cabDN5L34GRabAYf76",
  "key22": "VoNmEihqYaZwwFjuWfoo8KiYXiQN31xh6aXKePYHBx17Pnk154skDS6kxjDUTFCzytUJrS7C4X4an1BwYdsa9uk",
  "key23": "5qQoTQwQFmeZaMwa5kjYNDkctNaSpmdh57DrvkF5NasqaVftXi2YiKBQnCXrUuFrstZKmv9n8j5MqMpAWi45FTeQ",
  "key24": "3riBSaoa8w6hJnRQKqKL6orUSCLnj2X2u45xzsfjCf183Q8SVkPyv3MzZDttP4YRrHp3S1UGgx5g57MCP56Nak8h",
  "key25": "3pWFSnQgudwDwPesupifKQKRUY16Jovjsy5QcJu54wRoHxd4gU6TcBtLU5CTrWY8C39jjyBZrmf9ArT74qG2mhMD",
  "key26": "2W46EGHjpxdh56dCjxR19YWSdWtcdV7zcf9uZtJvwJtBKehrGTCxtXsC3KXCsTVpiKnSSybHTVnHkg2z5rq6Y86P",
  "key27": "4aeMCp9Gvcvqrd44n3fbE4vgW8mtxrHGn4yqsYDEHZaGhmLmrJRRWr5tkCPPLFrqQeenSPw4HkfN7rVCQoouprBM",
  "key28": "2J9RJXbiHchJcyAS7VEkamjNC327VLBxjQYYvtgp711dY6YZC9DZE63rw5yU5xooN3Xe8wxXsK63QHntuwLoKNkS",
  "key29": "2qiZbYgtU2zWScDigGs2zTZR5etnqJchUn2PqyJuVMqD9Gwi214FwLS5oX4oBTJPUtxZQxjd9GuCUrYBXM9G28L6",
  "key30": "5E5Z8bT46gtFoRViwSNSDKTRFsYHG2htuqL3fb6cxtUQMiTVqCdvMzn9WDBcH4QgUFMNKDmwAHC5xSD9xPnpok2m",
  "key31": "33cmaW6EUvY7JGGUbJbTfwM8AcxnjGxoZzQk3XbgguuMLekDB7THV99dSDCSnQzAwRYE8DFadzjK5BCYmebAy2Gz",
  "key32": "3vRdLfBFRecwwjugWTYCzoin7LeFmsWNxibEhVKc7mnkEnCFd34NK1jWzwDCePSqx6PKq6X7sieK895TDmgXXqGt",
  "key33": "64fzNRS9yhHvZZFAjt1WF3iE7VeyuZ1Kvh2x4QeYKBDLLz5Lirt3m8Vw7ZHTuJFxaMrEJvjYPSbQZe6EdhZnmAs7"
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
