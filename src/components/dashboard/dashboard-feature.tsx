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
    "3yxywKK8fnZP7nw4VcmdPCXvT9eU84qWBVeswyN61vP94F82SmtSqtM8hj4ZanRHnfojuqZvhLYkZgHmoXAFdgBo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NQv9vkHrAyr7ZQx8pBTxP2RRMyBnGSXJvhu5rik9h7Na3Sb4KfXGtXWQqQ29c45NJNz9LtMWVy4kD73EcMkxm8h",
  "key1": "tR7P42XWHrWr2bZsqPtCwpk2uBk8Zd4aE4Vbj6vc84wKM9GmEth2fHrPE6uRmTbmW94twy8G6yDwexvCqEVT7RJ",
  "key2": "5aogLjK8LMQLRn1z4bfyzxz9xPkM6mWeiQ44PcPxHZqSVCpqRDhcmYfZPf9HZrEucL7x43ZFkFRcyjCx8YJ8uB4Q",
  "key3": "4BoXbjtAA53RhVikbmvyxm7BJzyP57KAebHuXZ7LGNdKFV3gQQRURC57VCGaoBW1f5YtHvVXKDumPhk3LQCdQTiS",
  "key4": "4rYUWzXuDTzVWrhAQNLHybgkiYrRdimb4hSzBarCQkQhF6JSUX3Z6VqN6CThXuKJHii4riqaK5Xbeo4P3MuJo24f",
  "key5": "VCzWpM6KnKV31KNUPuKUdDxqD5nrY8Qo4Un6jdt2LgzfwWmLi4uuMNDgfYScxYQE7eCRqvqjLGG6fTniiFFDVsL",
  "key6": "3upZuN2WxhPvQYwtBJSSeVrUtq37nqbTjgU5GgxoEXbeDMD9g2a98Z9q6BzGuYSyFerUStAsQtD3LSgLuSToHg4",
  "key7": "5XbayWU9oBauBPU8c7fVYo8uwL7v6Zzu28KQuQLQmXdceBqW32pP6aLG76Q7CBbaRhUbzPPYWtaxgqvPQLtGvQAC",
  "key8": "4WSYZoZQkxrPVreTppD1RpvpNi6f5zvcKFUqec1Y2Anf74dnSNXYUGuaebzixQxzqSFjViyCGo8hqAhurQCVfX9u",
  "key9": "3vvyeggg5giwBqhXkp5FisjBQP1Sw4aDjaYbk7hRHm1ghTip3DiaUQAqK6yUP5LCjFSxa6CUc81ipbdUU6ejCxoT",
  "key10": "5PU78MpeWpWMHswoGgRR7TTTaPoW21FmUSrhXRu3LqFe1mCrReoUB1tQmKKaJXtiVDULWn1jhWfuRZ4SgnR98MEJ",
  "key11": "VK8nZsPeqj5b1euus1DbifDetUmmTQ9xoJ4TNNpsioTKLKiPK2P2cw6jYBv3PZ1DNzF7TSrPuj8a1bYo2J4egpY",
  "key12": "3gWK3q19TiuUUEnST5dFmiFhdQJv6FSxSW2actMawYWNSuG3nMrAVfADUamD5PRRCt48JX4BWU9vnq8zwn2aZGsp",
  "key13": "P4PjpA9ZwExjhDqHSvSUCLYFRhMctLnYgjcsP7nwhpUrJteenoobb8FSef1gMx7BMZEZbtM4whDZW3BqRujLEax",
  "key14": "EighmDvTiqbFikhdFFvH9XeLHNjpQJmrQGjYu8ocJKas6zkNkVvSSWminL4eWgGxV21WLukhW4so1L8eKEPaz3t",
  "key15": "3JtVNrxYpqoAAv26uL2fnsjwfijMfHZcP2oR6pv6mYNy8VoUiMYtpvMszPorrebRDGsaGYWrtYfGaecknTW8zYUp",
  "key16": "6HKt7DQhAyvbQ7vvof3CpAAhyGzovpZbudoi1cYMTnr9wfUoVvQMWPfGUrNzTKT5kXNLUPRzKPXigdrB7CqAv9d",
  "key17": "4KLTWcz8rcNEHpArcrjXgDMPAc7Td5w5BVdDjvCLvpFNCXG3pgUNZ1ytrnYEm3QdZAba7ZsRfhB46ecicDR9Q7RX",
  "key18": "3yeW8TY553ugFEVsxRJs75o8fCutxTmcEkLjRNFgEB5Z6rvzXHDvKJUx4J3irTcfQUoyQ62iwwEaLPL8uGJGYXoB",
  "key19": "3YweBvx1Rrmg5bVL1pyNNsaYnHLxiNPBv1YATQbe3t6H2ugSzQDYAWH1F9oNwTDeVWohdjq77ae8QYJbsou5tZjh",
  "key20": "4PY8jXLTcEcZUaCHZLKicUe33VStCQaiSrDUNsAxLbdqxpdJQ8vv4qW3HYFJXcyopnowRnoV6zqutfz6dx6E39U9",
  "key21": "3Ah5mTxLvGAGPEcpyfjujhLqgSebPkfxTjt2e7Cq6TAcxG4LE8FBGoWfKWF83jWmsLAp8SHcF7Qk67JoQrhJiahw",
  "key22": "3xRNUBZ2DvSg69bRNjz9RsiPgC9tWYjvcQv9nr4yo9pXJqgjxqkisoUZxTFswcWHwr7Kp3oeKUstaP9txXeKjQYh",
  "key23": "662crCZY5FKLewCc1U1Wuy3jPMK3tYxSWBbETV9adzU6qzVwiBhC3odfLDHHp4QSQL4FLpi3dAgTDXZzqK8DNgkm",
  "key24": "xTvaG8mLupEJ4DmBB2PD7cZyZd8Gx92TgrFrvQMsVvQp2dqh2a2Mr6zjF4pqWNxoryis2bZKboWeo2PKi2HvYMa",
  "key25": "ZRFiqmjaWvb1N9VrAG2J8yiEFAx75F93oREN3aSyf8XUAyLsFfb5qZ2mqbVZR7qwJYzQ4BkH4bYPBnRJ41GTPyc",
  "key26": "44zTD2yLcE8hKc9aVjbV5eFysFHFXhmgxqTz6cQR4K1zXEwYtCzraVBvHWfg55WW6K2jiZ5zCxzbdrDu3EpGgjFP",
  "key27": "47H65G7r9irP3bhhmEeVd8E2Cf5erDSVi7GySBoNbSw2wsEYYoX2WMNzwRgWksiaFf6yZ8YioZ6G7dGkdjaiT1FB",
  "key28": "2Y2SP9HAHbDHapbH3hz2n1AjsrcJAjno8LhHpEeuzdxWUs4J8G9q55KJWhd5JvLth51oPjjQiAxZnLhhBBxZybaY"
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
