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
    "3dJX8RanysvTRwfqWJa8wp5n7DVzmvTP6u3D8TweeQCD3ZLdAdijgqNnnWP2PNFc7p5KFtJqBoQB3qmzP2A66ERM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZTkvLBg1Mgr3gpTWmzhTS2rT1Dcugd1U6gDym2P32bdazzmsLeEQGPk3FXhMyygtaD1q6Kfi4JW8SHcxNXnt2kN",
  "key1": "4pw1no8256rQDodraJTMKoWGk5fKJErMhtj4QmPfKBGzJYAKmrh6cx5VVMdCX5j7cZL3GFNStFcANhFKWvZxz8KK",
  "key2": "39eP3d2XbZ7fwuSuvEaGn49jYxd5QcKo7rxhwFsSwS3JeERws9UwK4K23PMpgjTiaofwnFhvRftzXrRgJupeDWMd",
  "key3": "5uWKnGkhUnYwZk79h4qn6AkyphW6Em6G8RDy5Fajo33fVQ4mSHRC35deHedtXm8MWTf7p5kHrBVHryYCkMyg2mNr",
  "key4": "25yzSZkkMgTVJwjEjHn9QxdxnPfML5GsNjjSaEqyKcwDaPYAKnxPv1L9n9faLbzTPp4YpNkRrzHmTUbyV8Mk2vRT",
  "key5": "37BUS9rpW71YzukAUmw8xhikwKpcZ3fNEGayKUwuL3S8ZLFv6mgbMjCs12PmeAunzpot6cmumZPr8rPDBvy7NJ73",
  "key6": "5MSPqqohakGpkwJPHnSZsgQMDWwqqMFtLmJwy1XwvVSTe8U5ccuGEWSZ2DxTxm2VtQZPpHAEUCXbz1wkKngBQnGj",
  "key7": "5UdBMzNJguTHorjQrYArNt15xMH3d6otxxCWo8kCqy8shk9kVvu9m2Bno9VLuXtPFmQ6Cfb7y8jR4G6eRdWQiQra",
  "key8": "4aQCFXdH2XewY6VdBEHcvfihjS91W4aWCqFn1hUQ3Zwsi1Nv8G6TTbxxhwy1D2MQvi66mdTgUd75Zzs1oXZBTGUj",
  "key9": "3pXNYS687JuEp8Qm3fqCzfrAN5gp2yE9Vm2vqaDvpTGrHc4swf5t3XukcEeEGoVq5Yir6UNRJWb8pSucXvEHp3x1",
  "key10": "tDDrPRWVt75PVjFKKfGL99TcH9oyvPQAXHt6hsYwa39T85Bu8cwtmJcnRAdrKRqBDq5eFMyvttfh5D75WpgddF1",
  "key11": "ond6nfSGgzQQ8ak53WEhtrLfZNb1nYUsrc87PwJwqjJNnaQwqfEY7EZZRqpZYTEnXNWew1cynHCnG5h4btVq4Co",
  "key12": "2iWvbxk56kYyyG3mshfcDxgZmY9E4XTYPvvTCppLGim2JAP7sAVJTc8PDNVuZXV7bi1zEY1QT3au6J3Z4JjwZXP8",
  "key13": "csLacde1PaQSTrYeVVZCShRdpSzvReszTXHqupTNxbxhmHobo2awRJboQvj8AB3Y4TFG3HYb5T6JNwNxg924Txh",
  "key14": "BzvnEbeEt3D6ASHACJRnaGwYW9gxrg39Ag9XuoCn6GvXHKsAakg4Shua5mrnhy4QTxh57qRWqdiqZtDMZUN4nCG",
  "key15": "4XSWfemGefB6ndbHguqSYPLRcTPQ8m7i2x6gDBtXCbknTw1jHbbeNazjHSZqbEHqfgJQgMvGr4ah9RXYBfcLcarc",
  "key16": "3pNqkCgqwNz7B8Awh8aZUaBurHRdyupEkE9pQ6mps2HGwcoR5RkTAzPAvCCRqxA6TgRmfQ29LwPH51EHMGV42Aid",
  "key17": "2FtYJ7GfZZevAKcGejhCUgNV93PBDiBXauNKmdSksrgcSkkSY1XwcsBoRMSQJrCRcMBwo9VcBLLZYjtZX6DYmc46",
  "key18": "TUNmpEMUFxdaHvRx6FWMUCtVxL6SR2A7WynpWVNshXwArKZyzAnGA5hNkKSybTVS4pKwsviX5NX3jyrhNaMENvK",
  "key19": "5Gg45XFhn12GMDngPNtZxa4fFDHctDm91q7wUMayrtLqQgtGFhsNFmzkWHWxfozWAJuvPQ2FT1qULMnoEHwn5mtU",
  "key20": "5XK64ogTiG1bEB7zqtt9XC151B9foKT7MbDhh7WmcYH8WJXxCqpEGAGzaaCx1GtZVeXS6oZSGZNpe4XbSfxBDrZb",
  "key21": "3wN66rpEBFEh4h7wjsr8yPNTiTByqbdXgPKsj7R2n23hHWcujJpJBpUEnVkGiuKiSxCNyyE6oiusnkNbvfUYiLum",
  "key22": "2RSWXwT8jG3sERE8awGoKWFjr9eRMN9gPivu4yhG8dTHGSiYUeAJSjNPJ9AvF2joiuwNeFgFze2UHN2BnyLAFwCG",
  "key23": "5Tqzf2KKxjVRHmZRPrnr9hQD7boQkJDsH2iBZ9QbG8dgFmh8y5MMb3xaGR6bLUjwTeqiJQAnnjRTDRgarq6GQYU2",
  "key24": "3scKQYa8Gv7mREhUteFQs9VVktsXuoSfzuLfRbhasAyFaLuPcqNDewjVCJySQh9efR7qvZ81pYLr3hJGmL9Zukb6",
  "key25": "4DK6L6RLD13ZBe1vD1LdvsvhyZ7UpYdL4wTb9fDrs7Wh99xqHyAMav9k12C2LNhJ3XHKge2axHiuMHXPgfcUMsWM",
  "key26": "5i1c4oim9cjiX7yuLxp1NxkrNSGvHANqrp7gR1NLdpqG4D7Y8GHB4gp9AVcnj7YiKUP1mQckMQdKNgiacgg2oHXF",
  "key27": "2SsmdqfuqLDUfH4avqU4B3zs9Uu1n8JDxWZRdwoKYDtdz4ZGYBsAmVrhXHkJ6iX37B3jsNtJStFxhnqD725Dhnwt",
  "key28": "2TtRxCfPW69AN8Vh5MabfQH87S4u19HeF57F2MNSuZD1uHURNETBbiLx4BApAv1G6ovpCxonwxrbvDXPhGgPimtM",
  "key29": "4bMTcUDsZdXHsCjibtXMBCd4LuDdjna81o9fwpJLZ9k4NPoKcom63NtUpSgytywCbzoATsJ6Yc4JvXw21YpkjHcw",
  "key30": "5cr1Y3UWuRo3pYSTBf4t2aV7aJ3sLQYi7MDxS7D89XGNwhHurWkrWBJjKCWQj8GrpiNLbbTd8c32tPgrgAGQhT2s",
  "key31": "4N3PwAaDPuzic6sedThU8Ao4Mhxuv2bbBeFUyR6yAm3ELCSn6R1P5BbFjmDcDhmtobTViCMPM9JR3vqL22p4afoA",
  "key32": "342vAgQcujw85sZvTdpXS2Yyy8aHBhqDpsex1G5fannWLb7RcrVRq9zUMJtqA5EkPxHZMa7EmHUfadFSPTFPggns",
  "key33": "ha1osZavQAYapehVXG5f5YmdTsiVepCwMbxCPDJ1oRyAsANVj66w5GV2EjH8KPKUW6W2ZD3uscJXBowHbDA1C3f",
  "key34": "E6hXDukwZSXuJxoNFUAD683RQcpJ6UWSunrXFXAfTPaerusdWyJuM2Xu2gHAJEDqDLmxf6c1WzmfpLjqhDGStux"
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
