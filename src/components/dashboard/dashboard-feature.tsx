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
    "5FDcXUZW49VYUcZPEXYE7Dv7dAZqbqiXtzMdTuC1fJUiu5pytfEkgwRj7Exs1EkgwRTkdmiXznewtokuWkzpyGDK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FySNqDvvkmQLSRDUWmsC7HhfGrsBcA1piRTDhrMycCcoAxehnMVMcKgKQj4P88KxVyghcHkrJUxYXoscPV9ZAmj",
  "key1": "5UQKUem8aunHcZtovK8dtx37GQEbCrK2RDuAs4pVMNJJnR7Yb2NyecBnovDi45HCkAmWJx4rdvGQKxq4LnjuRPvC",
  "key2": "4SLhbiyHm7SR2y3NCn3AcfUkNkphWUCJoVsrXXNPNriVMxgLJnKNT4L3dT3mym78nXWLbznFubnDrRMVjuBho81Z",
  "key3": "7WJ2n1cs7DynZRnmtysbVCUaoc9BTwzoJv9JmxHTd565EYf9hz2om9JTNZR1aanyfegkQ97qQvnDdotTwof7Pj4",
  "key4": "2F46QdgHHYkFUgzGf4UzxJMMBatZCbeGzi1PvWVZDwmSG7EkFQJ4JJRytqr965ZqFVygrkSoFYwh36Aw2pVkov6t",
  "key5": "5ftss7xiyqcx3GgEKgkw6pZv1Zy5536LPcLi5hTTaNaLaMF6oJQ1yGSg6sFEa4MvGTAZmnTsEfLpVratDrS7cxRY",
  "key6": "4RxVaivb5gRB3kUj3Qotkcmr1a9cShSegnHBQTdXa7hzdmXY2WXDxgwmsHS4Ec7CkwGKvbp85qK1Su3KoVKHpGir",
  "key7": "3a1qMtmJrDem1PjK1oomWoKHMACHBLpQHjtsXkaof9txn3nQPsUrcbenkUHCRM3huoBbQ8iBj2mwvJyvqBQPqM2j",
  "key8": "WktXgU8VYEnk9BhMwwFn3xJn1CA4FyTZ3NfjXHGqoYQ4oW1bZgtG5dimk1iWCkicDKqoFnJF5pueHiDvZsn2GcM",
  "key9": "qzmMQ1MsWCFtpbuBanbdwG2ZanjLTgT8MJq6oShJYw3QQUZjoJCu9FbFYNv2Z9yC4p4z5kyVzRuN6FvA3RVxokv",
  "key10": "5TjQ8bHhKhGeohnFJRRzHkpLzX6aDTjGas33q4nAU4QKcEHYEW9CvQGkgHhkk3Q2K25NXYSWMn756G7nyqgkxv9n",
  "key11": "4gpBWVQZzuQc1fEjpt2hiMUtwZYiMBDUbBSZeTxKME1G4hiYLAZnGTzrBUv5wp3iCEtpCFmhbX1z8M536zL849DE",
  "key12": "2FSM4CfDRfdyFtFjEKP1imijaHUwxKyHcp6f7repCvHqr9wwDEwqiA1KtSSYeLgAgPaHbEsyNA4vEZNLZQwm8XyC",
  "key13": "2DVcdLh9wuy4bm8GGrEJTTUitDpf4JGLvYaAPTwgLh4wdUETVQu6Y2M5w5DPEtheX7kCEqCgZoSZj5saum8pFiPL",
  "key14": "26Et12eLtYm7Uji1UK2qrzPhyU5bFRU7JTAj3h9FhBkJef22J3DJiAbPg2yH3xodJxikp2hh7MPTNs3rn6xtnm5P",
  "key15": "2tL2Fn36YE37TAYqsKdcytaDqFRTh7qRmXAV3vtJ7Mr29BqXcw3DsP6KURz6M1htcTJxQ8FJ57gif5dr6SMWZ33w",
  "key16": "2Wh37ejh29X5c9tbLR9MSpXESUkgH67Fy2tSQiDuTkP4PKdkE6cdtgcYwrtDKLjZTiK5nkF9fXg7peBuZYW8cgTy",
  "key17": "52rNP4FchHRRfHCGBShRRon4nfCw2nPuEygwxG5yWdMmprnAm3TbihvPGYXRKP1Ni74bajY78BmqwCYCTbDM71H7",
  "key18": "3Gb6NJH54nPLPhh2GgtEn1rBMzZzW1UDwKsY5Yn5oYW5N9NzKzHkNxK6d2twYNUkEq9B2eY7jhVrrukjcHdov7CB",
  "key19": "5Fx5Ju5NjyJrPw2LbCEJgqtUgq5cBXvBZLmHMkK8b41wkvxvBBosvRfKmYAxx5JkxaiiLemND7Eq1ThTfVtzaTRS",
  "key20": "4mmQShxjR6M7XbkEsPkjsCfFdaQvDUvj334G2bJ2WZjuC9fcQpjjpqQ9vAvG5ErZXoqASU4kARujThNy1raotLdU",
  "key21": "3fMJx5KFKCBozSRXMvh85LG3gTGAAzSY1bVz6ZwfGSWwHKeLLn6CQQawM67xfe2FUwmN5fEKpdVRP6HzpY1Hy5nE",
  "key22": "5EjYs1miRMzFb1zDQzQkKneMbrpmAh6EgrokQQF5J92VbBc2VVankJQtSn2xBrSB1t33f6r7usUiTeqNoJomppgK",
  "key23": "4VDddvZf97aR6tQFcX72uF1BW9UY4oS2RGETvNDsCSrEs85dBzpnp2K2LJ2pRKoCdngihWAfZGnEoyGhaw6uHhcg",
  "key24": "2JuoebkEamr5K373HGSkhQzg5NiY2xzt6SAmDaH7VPUULaRgDYgiRgDU5mYsztHnQwcEjLu1pQYZABzYHhTQ29hE",
  "key25": "jPWw3xo55jidymTUwbr7zDVNm4kS2uW5cpQFMaBF2MLSf75ahvJXEw55XbdXbU4bdRKXUMhKpyrcyUCWTAQZGu5",
  "key26": "3gB5H3pxsNumt5nkDNZBkbJh6SM5GCUA2Cctng2ffkrnTZ94MsqbYUBNL2VH5fPV4X1HfwBwEmLUQc99BHL4wRSq",
  "key27": "E7BLFMcy8PBqbQyjMhA4rMowDhyt3YB1QH6wD58nUqEKiTeVajy36tRLqLwjydHPKgVNVLXk9AoZEY7fnNZLGHp",
  "key28": "4VUG3w1bEr4UmsvjisUB6HcfHPTLzvXJsKHcGpyhrCksftMG8uEhEC4UQvzCM4ehKkwmFHUBLwvQY3swyoxzDqH1"
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
