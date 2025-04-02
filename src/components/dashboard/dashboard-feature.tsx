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
    "5TDMurx3bX5mTE3LLDVSbebBZev91xxYYtqQ15esApAMHhxK7WFT2aP7E3v1QNWfHdShG1heqwYfDdcjiW3ccm9v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cYJyfbXuvRQQFY2CEi3CWr3qeDtJJgAfPUa3Mvzy6Vxmi3y4wzFpNzduf4jCbU3W1xy4KgKRAGJoaFt1gTJSZA6",
  "key1": "4WDD2jQygC5YddmRisg3T7jHBct7gYfTA9Kcq3aQnT1Zi3MV9VY99erziLB6UFNpkScrvsJqhyvRV58nK8jeC3Fx",
  "key2": "gjhHeFYh7G9pwk5QYdTcQLB14mLbd8iAjH6zPchSWHEVZP4ZqwwQSvfk1cTzmddZfny9AcHPPXXF1ddzc6d2wSY",
  "key3": "5uGU8abd8Mi3Sr8dC6PYT9rHqUjwM6vHc2CdCK2DoGhurkbpQXmUjb37VAHwEuwiFQLYaCaivSHSjjrSXixEpo3A",
  "key4": "4bWe6VxdvjPhtNyiPfU1UHsMrYP74S8jjapN9HPTbJNugkWa3BMRivA4W9wBQC3jCXbD4TDg2fJvvr4zrpSdxSf9",
  "key5": "4t1BPZpSyscp57TEwBABmXMioaUJZNRgZBNTwEvB3L5Z83zwT7GfBb6WfnDVAmuvSXMGft3Z3xtdocyQWSMy4p7M",
  "key6": "Yx3EryStdJuDrVq96oYZf4LPjGe6vfqYUWuS4RbvH3gKUKfZi2aWKGWqZNqxYjAJzoYSRfnqZuN4xLt6PeUGN1s",
  "key7": "2B3ugTzhwTwdaGWJydcKutnxT4xFDGbwGfeTUzx4vPWeDAET4anLKNKKVZAHHpy8vUK9kZZQLXHvibDSmXusAG48",
  "key8": "3399H296gCB6WrJLuZXF1qyuWLP4VVBpn8quaEQ7Fp3s8VvjVpcSUNLhhhBnJk7EkMoFrGDdcfoZVDAfJYTnwfYm",
  "key9": "2TwsiY2f9bFVFmyhWYj51DEJ1eWU5mGqfjyvVrEbZaJX6ryXmPMHhtFyCA1pJJ5qUFXayxKyX83DMtgm6ijRnxc9",
  "key10": "5hra1F88Z36AnqHwrWeMiWNhsEK4vuzzYTAGAk1YZNF8ob6U4sMU7PaPXXaoJsXTb6mzTdd4SLb7rhXEcPGS1yyp",
  "key11": "3bMfpo3qY7on7oh8j4qCvJhU5vRDYWRt971uvyfUQkQ7eWRUDhHtUFRvzudWsVk29gDMEyb67rvt8BDE4DPaXahX",
  "key12": "pEWXg1sDksnvFJgyvpi22pz4W67JnCs9nh6t4b6mHC3Ub67YMi7r4CFb7Jq9P9RMna8G1WvTcA75kWAJ9wTPV1T",
  "key13": "2AvC8KQCCv3RZnPDHGJ8N76gXKiapfBAcKL3DGpp4gaaBVhm2VdF21p7vyRrr1V3bAe4XERLqdmiPKU4qbFJKTVr",
  "key14": "exgux9FohYFvZ8PBhN6MFsEEp5WftyZNmdCnHdLZj8PFXCwNxY3tDGvAueBVSFKBQpPbfxrkCH6zeYbdSaRjoME",
  "key15": "as3n1CPKTnSFp1hqZJzQMfyLXoFNRiRyzA9tyyJHKfagWGYy6ogZgtMgYDKLDiFDsk9N7qB53Lb3scTZnRrWCvL",
  "key16": "GENPAU8gVWY2xb1teXd8c7dgidMuQF4ZU5xP6EDFe5zb8fhASygKARBP7dVeD2s4CNVGjMBGPo55jadHd6vnRBF",
  "key17": "2eVPCsUAdXRfo1iCMieAqyiD91LhasRWiJNvBYKiQF6YkyDjFrEGs3dCAVDEc63DkQB1q8eMCjG1TUVqAvtqyyrD",
  "key18": "2iMCNUh1M9mg2MiiAmgF5Ngo6prZgiofkk2fJd2yZj9E7uQ6xyaAsSr9VhCWe5JHAgJkDpzKzMbUTnkyj3LpUpYV",
  "key19": "4hXD3WFMvZWBUp1Ec9cmjSDQtuVEyNmho5bEWvmE8bMyVu2GvymoSn1n2m3GwWi6cSRqQGigTumWY7wDGoPc9gQ4",
  "key20": "5yeH47faKpBj33RBXV5kc5ok5WLjc5MTGjyQovJUBUwKw3wtBdMks7Pv95Hqo6cyTL9e8XbMqPqvwVVKhP4uypQY",
  "key21": "4fRRt8uQD1959ofCbnM9wpVkoAxxZmv7ZWymoVbxAaJeLCmEkWR4VapBTmu4psWJUVLBeS1eUdqKzmj8wt1xmxwn",
  "key22": "76W5nuzXiHTB5eTKJM1WFxM8n7qDKRhHv8taMCkS2GoGnNyL3VEZytpybtp9CxW1tzV1bu7KwLCky6icRGuvMSM",
  "key23": "3KydVGryatzPc3zYWoVJsiUTHoywdCQDGGxCQqSTgrVx4Yy2mqDJRoUzxESfHR4owhATEiWhzLfkRXtm9MJQYjzQ",
  "key24": "iaLLTuNuh74Tpcn5kUbyXVB7J3nYPaVSczj18GccFHaCxWqq8mmCeBrYVAV73fhg6c3wEqPGCFVsKFpJ1CMMePx",
  "key25": "4o7qFtKzYUD28CirvjFekVhYcsBc9kC6qkMGYbyfnjPPeHrDE2iBoDxmPuHWYmntBZaqAkHveccGvyj688bYgHu7",
  "key26": "464N1eSNhxRoo3sKgrqvu89ViSZyRvjejbcdCyZQZo65EgYRd6mzo8qiSC1YLXsvMENNztHYJTdfGrBv4yaiK37F",
  "key27": "31vFRJrsfmsDGET6xue1kwmj9mHGPufpLaS7iAE4otirSB6iy38ABkSLaE3s1NyqqdtE7kHtVKUMZ5omYZUVwrmj",
  "key28": "3nR5eadYU3M7h5C99Gpv5D5SHDEnHKru43HqhbssMJ7Dxjqk4XQJgHamMZHBZy8nZX2H7re3CMN831H513JBT7bd",
  "key29": "2iLqbXWvSQSq6K3pJthzxdMGtj2zBaE3M5XhuVstutWaDJKVVrs2QUJnD5jxWenCPu8eX936XW2RuJh6tQVrBBYn",
  "key30": "4kYefwpDpELsAKXNJxs8MsoKWf6U6gNoH6DENdDaiyGGHaLpDxCMBddDXhJswaFs982sCo6aBfjTeQzXtDf4p5oC"
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
