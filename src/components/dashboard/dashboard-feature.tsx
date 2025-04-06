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
    "45Fy3J9QnB3ZMqJ6VBen3nWDi8tD1NsF1iqRNiqbgmj2hEJz7r9AFn5Zym456391MoUp1qG4dpv9SxtTcuFd2nug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23K5Xeqp73zgMJbV59AC2TkKLQNQKiCsesCbSV18rERoXXPKLGkiWxRxnoBFrodAcRpyCSZ5aoBQDE5cm6bqMKNB",
  "key1": "62jJAp121VaUYuMRwisPoC3f794m1ECv1VQRx34m7oP8vhdQF6tMXdJNY3u3aznzpR7k3w2MPiSdTVpp6pZbeZNu",
  "key2": "3kTnbjVYv5rE3T1H3t3P2pzy3sYLqoQLv58AQjSH6Yrt2dbgmHqNUWEyAuD3HGd7sg249zGS1FFVfLnSkRGTsCRK",
  "key3": "5YavMY3NZi5tEYCYHnQTqGKDqDCwnviuk2pBn6Ur51uGXuiP3vUd1mn2SacAW2KkVgP3t1LCn2cAAAda8ndJ2JsZ",
  "key4": "71CWVRddLDqVpB3NrQscb9f7uj86dbUfVrDybj65LfNKabj118uSTdzavPn5v9KaN88jk6UnBT4VJUWHV6f1FYv",
  "key5": "ZxjSCkMzj7tiTacoGuKTax5yeP7Seqjb3RC5rdPguCNE2q5sxvAuHW9Tm5pwvVix6aH3EV6h7HjQDb7WgFVMCSN",
  "key6": "3b5pgs6yXAsQSVBot13Z7aGcgdmakMqMafptnSUGWx41XEvtNaGzcFpGyQfeY9NwW9cDY877sjtt3kXurAJbPcX7",
  "key7": "4PGLDdnN7yBbHQW5RHuXfJcpnYQHzEsqmQVqNrrmws8Hc3FbDq5QaeSnbbCEMUtjNuV4k5XHbc33vu6kSzqT4eMK",
  "key8": "4d4UX67nGuVeGFVYkjJmKUvCQErknsFcmFTVundc4ZZVaN1CT9CBRixucqwtB8E39eRhwGF4etzLqdWc3tids88e",
  "key9": "5RaLE8BEAphegkkiBEmCpEqUkncaPokVBPDAwTL6VjfTh2GC2BfSTgwjV8wZ8MWPrDuf7fHNDHp6uBaVXEirVyoA",
  "key10": "3TctmjN7bb8gopRvQSkUJm8FWqd1Gkvk4Yp266p9pmH8Ghjqr17DY4uVnSBT15wvSvBHVe26bZCSm78Fn5qvoi37",
  "key11": "5nuckAGWcW8E8LCaJJ4NL9PXVcojdXf9iKLyBjPijAzzMWKJdjJaY21FDQ2rg9mGJMU2pKCXwiHDPBse5FGJiPW",
  "key12": "3z2H3YXHTuqYAEMbnmcHVGJYxhq9msEt6ZE3msYx2VgzwXEhhBP1JTcaX6UFSETMVN7U9kw6yaS1crD216quHxWT",
  "key13": "2fb2sorNKF3CDwLGCF7e6GwW1i23gyNDrWW5E2T3SVpHvhN3wKE2isufbQXtupAm6yJQJLH2qNE66tupvCrQQifU",
  "key14": "LvBiP427ELtemsvjnmd8TfrXHA1WRu5NpPNB7DsmhxdMtLtjfF7Lm4gQrjzpntexSopdsmXY8yqLbsQt6bnsgM6",
  "key15": "RViqp8bPJTGrYkRQ6Z2UdsLX5EDfRjEHXfKR4NUSqceoNX18X5SezAZ1Zt5tf55En8PmLba1HBmaDmh6ACRhwSm",
  "key16": "vYZGHFYA9kR1g26ULPJPiceaaUMfbewoeDYTNgfZB2wUNH2LYQSSayUL7dV57zEpoAVdN6ThURMsjWKW35BVtPQ",
  "key17": "LwcQRqwNnzN8C2HTHMYsECKCeJWhF8YerLK6ReCsJspYmWF9Bh7iA9o9n5LjfASZd6WmRFFskiZGYT5NsTfsDQX",
  "key18": "aTHLsKa1ceyPua6Yr6A876hhDCYhnhTr2Bu7mDixtN6nWvGEPVZvTw9bN6UqcH63npbQUH6xg272zcEx2RceRVp",
  "key19": "4f8hWhfLvZ9NajRzEcB3EWa9m7wDWqFajDQfvK3ff674YmPgLheCdToVqYwAAj9ihRdX5ntFzvXtgyVgbMkqxxNu",
  "key20": "3WiNxyYX4SBpfk76Jws9TcCP1ND6zU8qfQJgFeHvvFKq6FXXnd4fWYgkLTrmFwrTaMTYiXo3TrgayhviYcFnuuSw",
  "key21": "3ENRzXrzb7BNiGWVjgEAG4ntotEDrruWWdzUE8VSwiPt8amxVf8vbVokVzvcCG7reJd4Gn6f6aXNFxDMMEU23f5h",
  "key22": "Fn2BLRcDqvqqBN9BCNMd1zm3XRZhhnaJN4dcBQ3655pkghBCeeKiyLPw8WdNV4Qgoshfn5bQFhMUmquD9iJh51M",
  "key23": "CnPfqvih5FTy7mUrqzdKwpB2cE5ujNNqakhTGxzUUcfwfXFegQuFBDswkY1mxjbkLSswmoJbCKbQ5pKtayNLvZs",
  "key24": "3uS9bnmbB8GfWZM1yBAmW8jjNMMkz3M51Uzotf3N45CntwQN7qtTXRf2Pd2Us8YVEdiGonMTyicP36QqPcnhUHYa",
  "key25": "JYZeTAwttZR9RqbAcmBPJbcT7SG8Q7Yi5rfggYz9jsDhHuRedAq6aTX6FT9js15yq6rPzTUxyTLHW7hs4NBeqiX"
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
