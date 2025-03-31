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
    "4wBHaDPGP865dXRZRb2giuQWFqgVsGbJ3fwjLsei2L1fH4b5rPMG4DggD13dqBGu3aJJQcLPSNuqwMzuRQgVEppP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6o8p3DAjZpEtX38AM3UFEMdv8vrnhPd6LXUcaZkR1xQVkWR1AspBovnoVWUsHEQjRMfCjqirT6fBamwgXUy1vG6",
  "key1": "4VSkzpzdfWD542HGdLHDehGnQiwwDmdNYMxW7W8U5j9ZoY1ieYtuHFYCEGsZjXn5EAMPAH1VHYSLYU3XJfmD5cWb",
  "key2": "WAtyMSj2h3pu6dDtcraYsGxfF1RaPcge7zsnz7hTr97YZZJHrobThwZMdx5tkjNZu4oCZHxFzqZUXcpKKDESV6t",
  "key3": "2MWw53sqJc9yyaNdu1rLCSi3a3KTw6bEJr7EwZ5b7TpysWiSXGdu6ZQitY2KKUsGRhok5LYYSRrK33JYjv2h8Lc6",
  "key4": "uD7aM4qpCYHCVxdPacN4Ntx6wcGzhAavEnPQqMHoxA8yRcJmpkxTwtiYGQFn39Dqao4AMkAZ3XaBWsZQWwyJgbU",
  "key5": "2kpXyLDi27Ym2mXB9NExg5f51k4sdLxVi3RJPGTWyUaHfa6euqrzSo55wQTnE6EykaYXMmudZNhBVexmBHZLGSCc",
  "key6": "e8z6MebczjamTiixQoMtoiU9JncqD1dTwkXnYTJzXDbK1zMigNqThmSFUn5qwdT4rCqAbmAnxQoELsgALFPNjVt",
  "key7": "5X1zeJ5wAPmnf2HJP4bsCikcGRedopvEuDcpeamQ32Wx6oomcxJK7TXwXt22v1jA3jfJeZ2PNVk7UHhik8Mno1dE",
  "key8": "3Rr2ZyZbHU1LQScgvtJqoaSv3YVYWeFiwMExutzmagJ3fSbUUqdXuEsobfJQKgzseP7PNHkVdwaBXWBMqi3Ned3b",
  "key9": "2XFzJaJfP8Y4d4yD3N1J6jnpdA5EbET3L34XVSY3g59oywTQFzGStFeJ4JzXNUkcL92jfqTczMkJFHp9Y63dkAyr",
  "key10": "4g5BkdhN19C5qAVb1HANu7BjQbD92cj7S6qfDaK7z3FoBeja5vFe3MUfHkvjXv9e58VNot5YszExYZFnNTy6LvHF",
  "key11": "3bez6ZFfGGwaBXyo56AmcZxLFGeiJXWMrbc3VygCrrsnBhHQ8pUXQCDuFtVKxYhix6tUVWtn3Wy7Z8dQVmgHV23p",
  "key12": "2vS8LkAPkDtfcpL7JqyoUb5x7UiXFTrcDL8X8u5LL8a855p9875fB4zGPBA7haKmJm9fPCCnvZzDtHeyQb4Q9wV1",
  "key13": "Wh8sykiwE9xFjeYsfEEkJFT1WHK9aizEPf32igE4MATgySwMnLPcYz4hxFPB3ztmsGExDTQi4k3B4TYHA7cBEsq",
  "key14": "TqrBip1W8aXjvgmsXv5tuishQaq98mU2XuP8iPur9867KLuzyinoUwymwXTEdfV6szMsvCi5u7qJ9cdyvFG7y6S",
  "key15": "3bhwrnwKMSnroETdXYHyBrejM6vRD7XfP5R6ETZSpUuwCU2gPSY8arEBHDyT5cYEWYdJUfPg38FHna2EmaNKBZDu",
  "key16": "2wdLEcLSnL1B2W6YgBbXdC5v4Qv59VTe6XWhL4k4fDkNTaBVuU2MxMMQV1hxfTkJrATgji2nNLFxLCspFRvmbv5y",
  "key17": "24JmbR2rqWU1QMTJqoXYLkdbvsU9udoPAaFUb2jwKdLr5PBuDJDMuYVb9pQU9qFqic6pQQvBHgNgh4C5u6XBb8Q8",
  "key18": "54LBBhbRMZ9C8tLb8vzpuw5isTPjLWavrnkfKcJRXVTuBmqeCwKoGzc1My4zY3LVkXDKcwpced6RWL38T6TPVnkd",
  "key19": "DizY97zmK5Z1ieL83bh74aULWw8xc3XVMwicMLam9H2FpsjTkyQk6xKFeF66371yiQFcVcacigX2m7qwwhaYbya",
  "key20": "2USzd1f1wa2sZ8EM5X7CDP7r4sMvQqQZXqFRqeVLgfwAdJnY9SwaYKX6xFEL6LVoCXwzMa45kdSA5FU7SLc4Fa3B",
  "key21": "KbHMuSTAQCpurApLt6CZnZomCWko647nEWpVbBhPn1q4f17DUb4JcJ7ZQMt7B6nMMo3Ea3dsowEDKwvpdzaAJVY",
  "key22": "58RrhktGGnFc5syWKCgT5QPGs1DRPXre9Qad2XXcXNRr2r9oZB2eE9UGXD6MJqqPZ8uLDKNJ2oAbd5wW6M6LpsaV",
  "key23": "4e1ANDSGoxqzszfMJ25cUJopN8VAqxpt1BevF8UTVEK4rARVuCFU9jiG8W7AN3vZRqRuPuRtSgruiWdznfrr6PcW",
  "key24": "3vVi2gAJZWhVCN9Cq3wyWoiY27epPmRA3cKVk4ArNQixYXfcnFrU6J5axgKkVUVoJH4p6wQZq6w1rxVEdsXBuyWY",
  "key25": "3XSjZgX6StMAB9zXEPQWVz7hgCkNii7orP4xbr3bv1vkEwUid2YpeF7iHqYmxs5GpntcK97wy9P8avuDHuxbA4eY",
  "key26": "4GmRHXkhyFZ8zCyvrBgMCWKir6pa5EXasyPxPEotXsw1YEWE9hx2Zpmtd2gb67hwntmE8yq9ZzP1KM3JAYSRqDZR",
  "key27": "5gmFxcqinkbVRpiu69CfAQ9iaDM6tDG3bzc9EgQ1GscDRbmn6dQWxD23p3ADh7YEV6UEsLM84U3ZEzmZNcRvSjXG",
  "key28": "5FFpBQh9gHB7zUsaYw2ZVNodv76MPKnKhYzM5G7r4XfKAmei4PhvGfUqmzxcuTPk5dMzNwa7t9hF2Mydd6rrhiaZ",
  "key29": "3MHA5FoSxueyUXGn85KmLCa3BTvJCPks8bNK3U9gykcRY1FtEtsN3bLiapwitYzQg2VQnrffVdzVPtCyvvrDG3KJ",
  "key30": "2A2sudZCw6EHT2cqNoT94s6JToVER1ZtJYzPJF2JeWnaRiq4Pq1BKdH2VrGN1NTjWaAfbauc9N2mUWcvyH1fb4tz"
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
