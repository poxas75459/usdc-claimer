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
    "51N1DTjrjyc1Jg8XAcg1BgntSWwn6DSgQfS1h9yvcX1ibcG5tqBdisQpPKJr8o3vGNNTDbfKckP85PETaP41SgNh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h5xpdE8vn3VVHLSDrf47cBbmgGdm41UofjPguPC6iQXcZ2zUajJfokUHNB8WErGxwUoYVBK9Dye8Wh7XZMSUTdu",
  "key1": "47RnJibeTxQRc8eQRLMnZBxpV1zUBhnVGEbxhQcfzRYmyATjPiQNm7juZFwm2Yn7v7bW9AoUzCsAfxSg8mYt4Usu",
  "key2": "5rgJPb26cW5rCU4dF7eb6xh1Ti2f8nMNcNj2igF6Mxt4TZaM6Mya2mqDcj8FGswSE656ALDALdahvJqRJTP33JBv",
  "key3": "xLYkamhjwJjhPU2oghP4fqtqx8yyN7htJ2pCaRqjFJKYDGN3woY3sxWC99DocpB8gwyCCkQC5wZu1aJC8H35wwn",
  "key4": "3wQ6QbEwuXr53qdFWxQn6sGNBFSmR4bkiTNw14EpepBSokvmc2dPJMAJVfJZuwNRwYUAkMEFyK8Xw7vVPn3C5yLa",
  "key5": "4ykbc2iL5WRYU2ZdZ2GY96EkMACoSnadLQuowMybSMjQfEH6Dvt3XeQxFTHpXax2Hmedh2fxqt49HDWLK9iY1o1c",
  "key6": "5joJYF3uJqVy8vphzVFQ2T4kbF4P9W88Yc5sRztDUBu2jkLQVCt3RFs92Tgh6Cv4oKdWFDVHnKMSkGYPPZ8rpDzb",
  "key7": "4Zd4V19VemPCZLf2Qm6gEqcmTs8A9hn6EFpvQy6bVuY8PnCVuzd8ehLdq886eEJxgQy7273EeC6X1PU2UtFzyhF2",
  "key8": "5ELBf4BcQPMNKnB3qyeZYSR8Jw5V58MudpfDCB94ZqNDyBC5FZQ3XngUCLB3ogUhfugbVQLVbYxsEdpkE5YDbfHF",
  "key9": "38H9yQFgxgee7d4FbPzRJkco5Z5Awvxr2hEb8iWNc7kp7dfLF6jMRpMqtRLPn3tdX8kVzgBgx9v42jwtV8wsPMCQ",
  "key10": "nUBaHBC5ynWk2JsWgDbSd1YH216jWc15RyoC16pF2scu4w71xbvgeByG27wPwKX59g7g3P67i5MkoB6yxfju4rA",
  "key11": "4Lv3KFLnTVafAAxgd2GBxubcpfRAHbDKgp4Sv2EPLdNm6U3fUaJVtsgPzyL3GHcasQ4uHm9PcckqjR9KzmqAAU56",
  "key12": "3NFwLkRQrE67gsdAtN6wy7bYGhhK1Uhok98UPjPBWZtJtviFRZEpwNbNbhxhjvFHosED3C55PUko3dFjq7pBDo3c",
  "key13": "VnwikTnvnPG8fodhR3ctixNERVZmWCim7cMWVuD3bei4wC2fVj997PooJ6q6Lndp1y2Wp9sKDPC7BgsEfFBUXmz",
  "key14": "3Uis6FEaF4vCuaKfHtGkDjsqMvcBawzfjCyV9G27yYFdpuDPjVYveM7iptc3cv3Z3g4yVkjFeM2Ni4Vrf5iAVgF",
  "key15": "5erbwk6mMjrvmkuBqE7Ggmjm296qJrfqaM6gAiW1VZ18Nx3RkvS8WhNzyoLqeWLJA3TvPTSLahk2YnzbX69YUiPu",
  "key16": "55yB31tZJgac7qEugSBCSMnLq25hjGM9XusZpVPymehkJS5zAhPmrHzosuNCrxZKzHqbvLJ6ZRtFmmDChJXFa5tr",
  "key17": "5nVpNdckAKVMV7hxXPrQ5bHxuWrzY6Wshb2ai56C9hBABPGb4NBrpALD4rEkgouUCibE122auycyumC5jeRdv3iQ",
  "key18": "2MzK3BHmNC1fra3PQwQ7axoFFCGeQgvFtWEJFij5KYmbz9Ev99jKfChmXRdyvvWRuboLNnQ3hnp1NZdrjBvmmAjm",
  "key19": "2knP627oTFPyh4cwZvRXRe3nXcGzBsjvhHf3unKt1JUB97W7MunoEUiqk1M92w66CyYwW3uyixCBC1QEouaGonj3",
  "key20": "3YaEmZg5o1t9utuyUjV3cWDvKdcWEgxDnr9fejnuSfvHSMDqT2gX7TVFkcZUGuqvqvL6GMQ8QTNuKSKGkWjpJ2uQ",
  "key21": "7QuSpJE65yE3H1kZ1qLVyoh6fgN5Us4CWmHLW5hvmYYHZSL88K6V12PF2LpQTyy3ktBoJgf3S4HyMyBJZYaGsLx",
  "key22": "nB4uxboca8xnpQLbDJqDKW6ZBSbjgxWz8H9cKFQu7YhA3GrBF19TLQAot7vADLobiTsBawXJ4qjQtLnAfLsLaUD",
  "key23": "3ETB1tnQXBPvPmkYL3HMzq4yMmEDRV6obAivHHdcJXfkYedku7EaynkeoCK8qv3FLTgbbTLhuLHSRjrkR9fKXpsu",
  "key24": "62pyFATmoqkjoiDD7TC8MDfwvFr6ZUFXbVePxRs3hCaEofNPDGvqmsoEMHnvdhGykukkwkHTWRg3miKdPxtW5Ktq"
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
