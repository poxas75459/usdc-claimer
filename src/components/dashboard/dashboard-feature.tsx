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
    "38ZXDEecyB1ULhnn7r2AxAvELJ9ga4VpG3e7BaeSZuXHA7NJYS9GvSpGwNnB6sQ6wgQAaho2MiNKwXm4cntyKRy8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HVtC8JQzYg65r8A3esvbGBAeoU6bva3KRa7gNtB1C4t95rMmH7RAi6JxPvYACvHyYvn17TR35tEdRzqPYwwPpiY",
  "key1": "3xDqt74mTvxsNCNEuk3wFP5NbXAvXFw4xNcsGzTGELjiPoj6mLw9B5xZJADdQC46SkPazUuJ6Gb287v13wESHDrS",
  "key2": "38LDiWawiJbwjPfdEwoYfc9LKPCSqWM25CQ8i1Pyu9WQVFtZYhb7rzFT7aFBCEo4voD4hHamUAkkEuMgEt3mz5iB",
  "key3": "tbP4mtGTtCWyB4yvdrSHrrRxAVPhi2iPvGc454zBoyLQxuvtQAEHU6vCEXcPJPYdAnfB2YinaaxH1ZxLkJg3ffp",
  "key4": "36iNzgjPXxFKJinqukqv9BjRZkKwHazkFQ3DidebaCxGfqfZe22pRUDuy1rWa3oKXbJtmZ1dfvA8zkxotEBsNTM5",
  "key5": "3auyqdywbUgPPQAcw42pm9KipPgCp5mdKBio8av3gbAUFhM7hid4pGAtrpXoXZeE6EP7BF1DKrsWaEBwErmCCi6h",
  "key6": "3ysrC6jetz37U9cNJDKGmShRMS9LbYbss23JyVHuKNWRuabxg3HJYg77QRp2TxLhai7QsBRESJ5DR7E6QXNqSYoW",
  "key7": "5wLu14rys2VK62y9gGnMn8M88uxYsBNZhrYmyNbHBDvgYWeNaqeYek5NN6vqii8yZutNeAV95A94qSCD7NghjdDm",
  "key8": "3LCK6EVKDnoNHD1HjcN5hf3ApPZXLibzUx18JRTM8y8pE4Lo1dL27uWhot3usWnZnszjtshKEY9XMHca2CiStUxL",
  "key9": "38kXSV1CekzRosnRjJZeCvmsnci6VeKgnWAKiBQJbaoKkwojrVJSon2aiwjsJsc9LgYgdE4xVkNxu89BShPkmTSB",
  "key10": "29TgV9tFdo4uTNBra1K8rcnZYaDBgPrF8DyVLo77gLQe3h9PLx6vThT3CVJRbjSL6PQik39KikGM9PdcEndtm1Xq",
  "key11": "46NCucmn8MSZHcPVuiDgs414JRF5vjRRnRAQmmGXySVoA5N3kTT8gccKJhDa6tBfHoqwGnYw6DiVfhntuaqt8uLQ",
  "key12": "3S16YzmBraoqSiXHsenDC7ucaxX7pSquTitzCfnq88NLjABQNtNFPc8TF5dMLM7Anq5KA6Bu2fTVyFFjgoRjK8Wg",
  "key13": "tjoAuj2Bd8rF2CAgdToHReCmEaBvs8fe4qqskL1b5mpZHzoGPQurzpP3vdqWG6v7Ls3YCqqt2B9rVrXBkufozus",
  "key14": "2dohFbzsqEc3XhzJBLxcCbTVjCqjig2huyxMaRk4uCiK23LsmnTapN6va7h3gNVhfgzxPEaiNcy5NacymDx4HJ53",
  "key15": "ECZnUET1VDq3NxJEzjAZSCvzoSkCxUxoU1LNxrDzeVb7oeYebnLnhUkdwufNpSUW31mHtByr84R5w55zWD2t8Ap",
  "key16": "38fT2JorJtFvke47MHS5EQrNUsN5CmaWu9GDqqia26aSUyqyngQm8ugADLq6vH6HSwZgiYxT82e1i2g1gi7WFN5c",
  "key17": "4qZ5YVqDcJHVBz61bLtE7hUi7FkbgGxqcdrnaExVL9PK5WFidHeRgxBs765PpUFqgzxPGtmC3L6rL2MVCLQ7d8tx",
  "key18": "5J9Steqhf5X2yjKaBsbM5aTo8Tu6WJNwTJKtTMn83Kdxhkr9oeecf1vz1scqx44endyzyF4HujR9gxWfAB8rVS1L",
  "key19": "25ZpjsrJPKLsp9ZHte2b6FUiAtsGhS5zThqyd6Nrpa3z1Ekv2G1vqXoDrxKuRXqdRg4VpHRzvP5m6THm2U1nHwWU",
  "key20": "2XpxA8hdarpGr7Uaies97xdarReYW8fxtnysxTcuYuxMQCYL3fM5QDDP2xEzPiVjfB9bbZ4C4n7RcZUvR7ooWTt",
  "key21": "38pjc1Hy4adJccXMD123uDoq8v7HRUatqL96ee4mKTWc5mDSJED4nDvURVAcA7M1dC4YFMEC2nCi452BeTh4Ep7C",
  "key22": "edZmGabNJhoR7aoxYfoEwAnjabM23HXZAx9DWBrbBDKGe98NuffVA6aPK1xBTfnedUE8SZemWyxdjwwrsT4PpQs",
  "key23": "2bu4GheWsmxET2KpuvYqH4Us1MNd84HtRPJwQp74NN6yjhBKVJuVAKkBxzBrkJK2cximqGzj4Gi8Sskmc6gdcv3M",
  "key24": "gdyKEnbv9S9WAThQP2NpKu5J6yRugtR3SD8SXFKkm4RFLMMpfBpoy8dBwdGup5jrEe2XR6aiwGzMUPejmWV1Jze",
  "key25": "675qBXjtqoAWH8z2ejX8dMrrj2aKKX6w2BZciEk2K2nMq8yGCXGTzxbM3T3vLgXfE8vUjFXdvtUUtJ23iHvutTKc",
  "key26": "5xhD1XGu3pXW9WrGr7KZjCRYTy6aDG7cjCiUZkwpGwnhyH74fi8Cb58vMTtrGrE8VH2hjx41RdSmkE66oYv17F9F",
  "key27": "mbGiLCgDSiyewTMeAQKJUkGMCJWPq7hUcKVHCY8xWU7goKTZfyDL4koKMy7SD6rkZk9wwFrGZFR94BwGG5KwhHu",
  "key28": "3moAbcaHPUdEwabvUS39ZT8qajTVyLcoLfdyR54VTvzd3GqGH54vNJ1iVSaJvNmqbN6cpqrFsfyaW6BqLuQtLjvb",
  "key29": "3bxpTperjcPv9YcvsNPmqNWWviFewvUyFWTqCCVhmGzpJEpnyj6AbHR66JX8po8vkiNNfjjpEQtuJRgYerxvnV6U",
  "key30": "2xKKNzrfHk7Ks5qNBffYCLSGwfg95uxMWfG69stPX4J3oL6DTXzYW5rJnQKSZYXJqjJ4Bgo9Sdt1bvcqh47gCaHg"
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
