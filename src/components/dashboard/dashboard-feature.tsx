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
    "4iSahCchNnEXLWYdGNxC6urQTXxvK1oQj1PY2Npm8R7NbpDtBP42WUAi9pCSXKemUnDu8YrEcR1Rk79UZSS44jjP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XBNhsTsGrUgofRe9ZQKGt1Y3Cw97PLLxGay21YFfrAZ1WvSfdt9PA4QhmeRppaccbpsaiMQnz3eLtN6yWgKCWbg",
  "key1": "3jvVe9tfUYyFhNHUuJ1WhXaJtWdPsuoyyBFXQXX8kipmCX8U85bmkcUyXuF8vZQyfuLubQ7sVXt4osYveNQXJK4",
  "key2": "3yWXqUkvESr31QVKv4RMACkoqbhgAR6g7zKTJBFzYgu57nN31QiZrrK4KnN2R8UEvRhQt5Jyzzcj1JMAXcpKo7Au",
  "key3": "3VcmXSu1GsDk3z6vtHXiXZvY18LtHeeEEQgvWLH4LYekRRL4uvmWtxghyQZ5KMCHpbh2C5BWEdiVox86nLoTCpRG",
  "key4": "4omjfgWMps7Zajnv3kCdVu32ZCWYf98tUEyFvEN9niXq1s6cQzphyaMxegmKQAtQMwpGCWT2aMzEy9ToXKwVWPxm",
  "key5": "5QbpYnz7atQb54yZbECETfpQXPHMuj5maiL3uaKdzyTKURZx1weT1fTW3CvosJdCMqmb1AK8hbodMVujY5hK2M6L",
  "key6": "JQaBTVHbsV9dCdpgp2XHrpVWg3UL7kbo3yF1cXzi7QBXaRyBRWnzywBSCLb2VcKdAk3Wuvw83PJo9hoAU7kHLj3",
  "key7": "dtPKW8VUj7jyLScL8UaZQAfqAaAA3ewUyyboS8moeocWsB4ZWUQ1xFfZfpbhF7yy8QcnoCVHzYccPNufXi9EizF",
  "key8": "58pkBkhUHNJwDyYXZtcPxPdGa7exoVLLMEaJgta5LU9RyEV2P5WAcQNjZ26vo51jb86eKMxskCfqK8BSgr8sCfCj",
  "key9": "2m7PvibUrRrudx1Vp27kqMN4CFcifw6KLw3m9g4Yz6tHh9dduga4pMw5FrxeYaqjbMWkXNUFSaMquycrkzinBLoK",
  "key10": "2HeNvoLz37PwuKDmcSfgdSZv5qyoSZLQK3XVn3oGb695RMXcmTieh8CdaPuNaE2jK9RqxyZrH38XN24Qz9MGuL6L",
  "key11": "j1q5aFQytjT1KtYJyeKaMTCJCah2e3doNyHerSxzzXw7rnCjSkneGWLVzj2iecK68NbwwK1VPRAdsVn5nAzARe8",
  "key12": "8njA9foqdPzkpEmbw6P6CPVFi9Zya5aD3EqcG171wAuGtehFVHiAuNkbdudaajUEvxne7YoGsm1MWS42anbCha9",
  "key13": "39iFr78fRYnfqURwVLm6jQuTnNyh22YynvkfrjSHWjbEqaKmnD4NPrWowJEPdSi6mRkSy6FMVMMMh6uMr4icWqqG",
  "key14": "53yKtQxARd4ZcKaotLA2EyU9M5h5QPhbWxK25McKPbcQzHosrL8MCSPNRiqjWimKSRg92nwm8RQQLBT2WyuHkZHn",
  "key15": "4QvSgcyrWvxajCRWz9wxLhJeoLmUfVsmF55BNtZRNS7iCf6oa9to6EGZBV9hAfKsWJZy357CcjMQzJeNQVVdwiL9",
  "key16": "5kJTVQob1Bwdpnrtme2F9KeAd6k7BnVaeMGzSthz6116FgYPK4MscPNjbmxXvs6Ent1vmCHYU6Bo5gsGHNWJnpiC",
  "key17": "5fw1enL3t7J1Kkr7NMZmdMjuELDtyvyZ6Cr7rrZnuFNiAW5ofwHs8TfvyAjNN9gQTiBHWn67sNEwwuggygCYwtqY",
  "key18": "3VDyXCdU5sN9gqaqpk89gjWJToCm2yC7qGeiiuzvB9nwqHDKEWGbKtGu1uwKZRpt7A38bx3g9bQy8PXirTv271G3",
  "key19": "2zPwCXdXf2sT4eHYt2FWB2j9dF8xxG1MUTco93qZMTSdgAa2EHeuoM338tLhuUz9HPpSaShgRYbnhFfCAq2TUmL9",
  "key20": "2ZDEtrN6Ny4Ee46Q2QK6TDdRRyoe8R3hepn4fWjvRBc8fW2p3q2bE3qr8aggg4nqnm6dgd2ivybT4Q8f15VN5Ads",
  "key21": "2j2U3yYL33pTJv56HbpAhf9wa16M8CTxxFVUgbqkagyxYbvTsm8ctV5AT3KkvuVX8cxddL3UjtkVREXJAaLBF7DJ",
  "key22": "zNKxbAekApGPfNQyZghj43wcZoL5Lb7SzYYSwMqVS9n2j7WbqHC4DYhBYiB7cDWYznai4ZbdYfZYvyufwPg2SXz",
  "key23": "3zZyAKVeEFNVFmjBqEUPPiTeReLubSa68NqC2cAq7R4dzun3kMshcu5TERQYHYdR4bG4coXSJmMKJHgqYv3dZTV5",
  "key24": "3Vi2Qg2ebpZ4XHjHGNfo4Q13QiZfBGAZVYx7H3g5ob14G6iWycdcKbnB3pVVqjhrfmJm57wCLNyvmDvhzjpGECHf",
  "key25": "4QzPwTRn1nuixmd9AGdjPfg5UcJWDSgJ9Fk7qQ9F9mRKiWfhfVauPDuj3N1uVfmQBYFwhkAPYjZcWYKHKJfUZXe2",
  "key26": "3iG5towW6m69HTt6gByH5Q7zXSfCYP8GgUksQNcCjfBUz933jsVo1rtRbZYbFNhigd7vmhC8AjnhThFTcixjWYka",
  "key27": "2zxUCzatN5Uzfgn8HWF7kCUso6PYh2ury5sRoWKurHTuTEkyYdhnueUgnSpS6edmgw2V9T1zCKK3W7qyXhbNVhMP",
  "key28": "Gy6cTASQLM5dvxVHsS8eMtStPSxoC84miBrS6NegwMYBE4q5BYUBRJMvqQZ86J7Famp22nAR1o9XTevHMrhuPZG",
  "key29": "66MDxyju2LvQJrVkUuCYBAZMiMNYN9qUtMTwm8sDJipXYnGLN6WcQbgqx5Rk5u8jd8rRkjqS1SKFMQzCGmpxJzx4",
  "key30": "2BBNeo4APDB6mqX1Muze4wBhYfk3bZiN6fHwcSPfAF7PnFDtW8XDbQ6kGpEPtiUtgF3UP95KuTpAcaco4kGF43jx",
  "key31": "5GbiWFvbjJhCFJxvA8QaEYkDTUJG7nYzaBJfBW2nagnaHS6c2eN9S4cs9aaWc6yQgxgjfcxF3gGN29HrTDxgLwYp",
  "key32": "4Fgsnr1aMGh5EcfNNvw6uSH2DTBqjxig9deJzyyo5GL1t3hNsfuq7wK9vtoZCu9dnKSsBSTWUDMjP8VDiqN4u2mT"
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
