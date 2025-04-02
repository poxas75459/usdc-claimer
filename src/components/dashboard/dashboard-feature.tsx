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
    "2SfVdemUU97eorKoH8DC4YZtxsGTJu7s7piddCmUVvrb11cHJUn9GnCW4ivXeLZS3nJ9RhC4CFbvWevjB2ehfKHJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mEXiRrHoT99Nbi1DxC4ut8ZBLMqgmcNLo4GQD4KTChLkZere9feZ4V9gcy612Z4KTU7fybB7GALmXBwuJqhYcgY",
  "key1": "4z2xuAerCuoLQ1EQXJfjHp3xazgDia2TZwsnKJuWAvmAtaCx17qzGNRRq4PeKwP3qp94pjV6X1xrmsMYYL6HZMw3",
  "key2": "5mvz1rk59WcdHYrhwYY99Q9mGPojzUFj74DHsntyabCH7n4pgTnVJWJKy4UpkvyVRu7tVccX65NmR6wuJoBf4sgF",
  "key3": "5yWt1WyRAJWRFyzc3PkGrtDGXM9B7wT5QfnBLvD8mPLutPFUm9r8oTNNmamSwo6EArruT7qb55NHNVPG8bQR9fKo",
  "key4": "4KqDNCRG7qjXkYbsLqLfAkRKJCpRckL1Bveb1ugcxbrHWUj5KWgwTbdikZ6PE12CKnuwULDnL74cVs8bbRLJKPCM",
  "key5": "52R17hu4EkYgUo4U3HE3AwMLU3Fg3xK1YVLw1UJad2yhjfMNqErmvepgpdJZE5s86ZRXGxyHiwFaoAYhNqFFY7Vi",
  "key6": "meJkEaSDcE4ZvyNWT2jXyWuv5et1tLujbyo91oVfvv37fHFqdPn3pEKgjvXEuhZq8PopRagxdH3KuCoU38qpS9e",
  "key7": "26AbKawCXc8LNELqQUYzdTby4GeugahhN53VF72krZLpR9zuZACT5Vwzu1c5m9J7pZ3XbDUwGr1f6UGqyBRx2bFi",
  "key8": "3z5z7QTDNsSWnJQVmgvjnoTwTH2NdXkq6ZQj9axw4ZMofBqKiXHih3n9nT4QgJhMhXcrnN4vG735cZ3Vd7s4mXJf",
  "key9": "4LotJM3S68HLagnGsPv9kwAAVUhZyHiYWU7imZ35DHSVT1or2PUzVaqUUmFs3qf1pvH1hK9NDeCabG8ZYhAcxKyw",
  "key10": "3pFe8AjbDweC4vY3fSfd8vLqh95f9EZmFuFGtJvDmuoHZVH1NniKMj6fig78nJ9sxrN7E69bornU8wX9UtwGyNmB",
  "key11": "2aHDaviDyeUbMnXrodkMdjXw4u44KqR3sFDDXVcfH8dgU9j1yJM7rNQHCbijAUFvjYwsmSXXzKnuams7U46jKJKF",
  "key12": "2Q8jHjLWhfuProMTubekBz2q4wbqvoxddKKo3veiuMKteamwxh9h2LGUJVPHHCYU4tjdw4Uop9GFc1MjLGumkYUx",
  "key13": "2PFaeJE9zXANcHBUpyydgV63gYSXgN1MePpZJcid7hHfHJ54zu5nPsWbvoNwvSjcm8AUGy6P4PaDSAPvuJHt2mCa",
  "key14": "5R6zshAy1X25vVBcL5gmbEh8YS1wST8wvFJc7ApwBdzRKohjyU8KBybkKUSnGdUAreBduM3TW8rhhzZipTHnyN8N",
  "key15": "2hu2xjnDrngmKYJM8q2P1BMRRGCbphAuZ836ymjavNAHtt2tR6JEhkkza9j5KQfLBfpMBLGZvjX2hGFkBvHomTnH",
  "key16": "2DsP8bGU4fnZRGa7QNnK75qxio4Fnk56sGZQDTmF2HihA3ejepN6wL5e8z4dRVd297AcPCMQfydbBySnZRYQi2kL",
  "key17": "37PKynK8KDXWjfCn3p8ZZor7VsyqW9i4kmDC5Fjz9DHVAb6boakxq33V1ZcBnaSVNmHeCvFsoC2BfZokoezjpNgD",
  "key18": "26DtWkaoNC7m93ATYx4zGHPmBdHVFHUrdaJWQFRAxwAuMQvHJ6V6E1YTrjz4nXfSERhfpX3ujPSSi1QkP9AKu8kz",
  "key19": "4raqsWr9QRWtn5koFxTfGgfPEU3rY1vw515pW5LS4gNNVzPk26QFLdTowbdzb58pk3gD523Dq1UrsFH1iGrouTg9",
  "key20": "5dGzc9okp1bJwUpgdhogRDbnYM9RqZ633cDr9ujWw1SV9LqG8CyR75mWYaKKXwrt3hNijHG9FAyUXH74e4ddgHXa",
  "key21": "2UEWoVgTP4aDaAqqgk4iRx1YUQBDHWyAu1opbeYqeQgZXjSUPVZLXjoinPBqSDU8sRXF54HgTzt5NrakEMuWso4e",
  "key22": "5kSSR3pTXhs4fLWf8Ys5G2Uw5shjhENiDkXRH7vuopC5f7jgDWMk3XGvQLfDsoarza4nbB95gpEkQKGXWTt89r6o",
  "key23": "4xqfprqPuzyEdcBFvbMzphLTkUA6cdsZEwZ6RhiZ8igv42UqoNFaFnFWi8KrjJFPpNFX1Q8UArVUL6BqD1RpFhKc",
  "key24": "2QveudcYqQbHqmZadKpJ8RTGzJhUQTemBVAL7VMAi4LAh52xxXN2VoceUXUzjMbVPboc8iWniyttNftWYVaPgEc4",
  "key25": "2MNRwGJhftZSp9cR3sSCcMGMnnKz4eGYkiKtTDqwCfTo3J7fzixAuZf9bAoi1FY8hiAc7xcUyacyVBSZh6V1tUvj",
  "key26": "2KFymJ67PxHGQEM53fT29zmCfAKjgkpyy7WXPHdZE3EjC1jpoTxfVjggHiZew85LhWabSi2skMBU4W1YhHsWHLhp",
  "key27": "4RH4AJ3GirM8Mcj7QqK8QN3DfUZjQ9UABGHLgbQ1VT2BwEn8KVgMZ5hB3p27usY26PwNtrAQAJaAfJUHLcGhsaMB"
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
