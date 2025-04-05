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
    "53SBJUteMngb4gKyCZX8NwKDxMncqgXZmn45HpjYTNARPre1T3ysondHgbBpveiTj9MtnZNuGdAdwxMNdiFNYuGT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g8UHGYQAFT3V9u4wxFggbBjuHJMAeH139N7xu7AAatxXiRjJURAKukjhfk7FLWw7X6wxUijAxHmbM9RGCtqUg69",
  "key1": "4eNvuKrMXZ3uTpgFLC2XiVDSA2nHKn32jed7vLTrwCNLScxsr6gcSvbxxzbED77EZbEa4rUgDNWkFAHAKSUdgqec",
  "key2": "2LJEX7BRbefWBim17aFWb4HpL4pfMqReo6w8rYA1C76ybmwLwvtVTqGQuAYHaXLPLzfjQTKWa5xiQabME1V1gtPd",
  "key3": "3pFn2rAUa58aQsKRBKC9rKbZGX8bPks89nctR7FrjNKaWpkC4oeRnPdipsUvoZJ3V5arMe6MaUs6wcr7jKYgf5wE",
  "key4": "3dG3sZT6oagpEhXR3mkyXezMq65XyXnDZ4PxmqweKFoH132KdvHmCXYc4d1KaZAfoS1mjskGxRNeNwfAKaaZTjSL",
  "key5": "561EoJkDcrJw19xwu8gnEAprtyVdDQ3TgWwod4K7Veeeyq5WjZsboFCVz3vEvUoJZfjmrVbHGie83gEugDH6iyHt",
  "key6": "3Eb2kF6ommaFavzcw7TbAvfJNFyWC2aRx6VhTUZL2FGDUWbWiQRP3rcem9xJke4Xs31WSwwMCuFUKMKs2znAXHaw",
  "key7": "2P7RKNZKYfa8UtJrsGjpMF3oJCLyMxGqsYmomY5jJqGzkfwMQBSkH9dXayS4tjkLGzvsjQE5L48Tj475yC6e5REP",
  "key8": "4feFSyiDZQUs6CmGfxDmHnzai8rmAPi93K6bFe5WyA43fRLSeanMyFH1rqa7VEtghbpq7iK8bKqQjcQKYM5iTwD",
  "key9": "3a4oYTBieNfutXYfCGEVu2KztuucWQoox5TsbgDwPqD7gY17ZihHcpWCwLMJ8Lhuy5jVbsoatXRDigJXvpmfzwwN",
  "key10": "4kjN1QP7jJSSY3KLchDoxhfd1NgHBMAx1bgKeJmVNoj7KwdXh5hdLUEd4SmdohpZpAem91HdGerhSPAreXzoumT9",
  "key11": "5VWk4ov2okyLsaMaHU4LA2VsTHdQztKjkLGhe9PKTfNvJXipPy1UmHEf9rwiPhpcoqGnF5c28qdhkwpHeg7dnYeD",
  "key12": "2kSyQxyvQmRf1VibzjQrG7Wi2ThhZz1JWJwqFDEyPJjy4FFeruSCnXvikzs36r1shcyq3RamEPvuXjewhZgtTa3G",
  "key13": "4JoYtiDjUaXM8GaRGzrv5VH93g2utrLC8q8ibZxymz73D22NMgJwRhzu6GWhB7JAvFS8JeLEw6LMBLsPPmMwkhjC",
  "key14": "3BZXr9yDBDDdQCrmuKkJoPhwSNRkzJ2gHrSwqivGzJZY2eM5ZjW8a2m8pNTUTnNFkU4F4Uvoc5Zg8hCBirRELTLB",
  "key15": "3FJLD76PNjukkDv5Kvf3LWvPPLKQxVBk2vbEdBG1sx6EUXZo2RX73uZj47kr9cLLGbJAVzQ4kk3ABb9frm84pn14",
  "key16": "55MKL16SA3Vq3HwGaBJdrPEsAtGAcSw6q45yVrAsfbXAW9cMLZdY7kYHX8pbNqNdVY8gvwzGNEyPtyMeci7sPTFR",
  "key17": "58R4bHEdDtuV6EWgz2qxPrUwGUWLoFtwegvMncVq3YbHpKvgimiiTzsoTeKxEnUr7oUcy2z1Dnbm2eT1BXRJ34Tu",
  "key18": "2rWKkvSj7nGqSzG1mLEiBekjmeiRemdjyWVzuk6zXMf4ekRghVKGGqdGuY8CyvvUdhvNT8abNpb8S7v4e6sFJ3k9",
  "key19": "3S1iCtVGFfKkEDyvotrq5YpwYhn2pAbG3CSaJzcuxvUm9uJ7qmShXT5uGAht64ZD1W6jdzR9TStFw3Nx9FQgJFpZ",
  "key20": "3EFYa2HhVvSWnm3pxWw5WsT9fBFgWj2BK28MTEiw6vBW2uTiC3trZbbKVWAkP7ExRn6LDiihnaJ1HousnnrBbySR",
  "key21": "3A5rQ3so8pVmQNB7BW3XDS5Qwr9AKzSd15X4tBthPMfBaenEjCC7gSvkE313Z5XmFptYjhngWksoQRevS8eCQ4mN",
  "key22": "4o8evkmVMGftDFx6yKbCHrKdt4uPv4fxus5nnqoMLqcWtFhiYLhdMyqmPzHYJvkrNdhit2QgAZSaZgiUkUuCh45X",
  "key23": "Y7g2mGCcFAJ3ddyXLwK86KCXYVwneyNdwqZpbBh5bAJwnWzHkehWYSQXVdETJYowTKyxLD7BiG1FQrSudYZxu8B",
  "key24": "4eqjvTXQfwdsC9npLdDYcwcdDMBwVhMQkc7Gh2WFyCf2sZVUDTDkFbNt5yxRQAgrFMkeKqEJgZLpqPuh5srERCyH",
  "key25": "2PMHMJRMxK7awPAgQwF2pGByfUdLt8xAqXVaHQh6165MsdHYWZdzVSJ63PDBvb1t5HPjEx7JSToT6ct9MxXisouL",
  "key26": "2Md693zcNry5kzxnio7vxbwMBfpjfRLgV4FTC6boSqxDAyfbdUtsiSWoYWN2Ydt8U5qTa7MCeSS7dRAhNbxfX32E",
  "key27": "3ymV5JfQBvskRgrkDgWxxrJh5AYV4rfn76keT15hfk75xc51aRRnX7VaSyF2NwRW2TF5ZSsyDzS2tovRtrfELCza",
  "key28": "pKKsoY8rnjJzsdzwMmM5DoHEwovwZnXhT7JRr2UjSwzLku7FUfktaoXfAVYgfX2p2CLFiXEJJaGz9aXJro2cCpS",
  "key29": "4oexwFxYU1WXSEfLDVDJncxi2xVLFuL4qUQFU4KMUfkoN7ALzbVyk5mnS9Vxq3XBSzPUR23AGY4DVCNinJRdwgvY",
  "key30": "4om5vRwEYCCttdjppMEsxk7Mj4RG5coS7F3q6fPK8Cia8VWbBfwxbsukqfNLBQFD1ktWyqD5orAX1w3D7W6F1Bho",
  "key31": "XDgnN53gCDzzJMHwZ3ap33WR6qkKufbiBr9FR1CQeHjoBPKzz3i38XvS5s5W3bCktiDLg7jBxcD7wSMpjTuMjpD",
  "key32": "393B3zm8iwQX2XVwcvXxNdbgHxjiG3buY2EvK5p4GdAXRxmakEMJxSxqTRUu5VsWnXrVJMkwnmvTCFVmscT3Vanq",
  "key33": "36SMjcrnJoMrrXDACUq7v66RepTomvUR25MGqqhGt1buhsGXayPy6HZWBy9gVVXKodUpg897VxpDxhZ3c7RzHL8D",
  "key34": "c1m5W1i5i1SejAfgwUPh43e8wvU1F6a7c8tVcTgdsLa3op7wPmRAvb68ZSKTXBfK4n8hwBR1L57yXZkWpHapFEf"
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
