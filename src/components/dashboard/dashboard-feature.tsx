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
    "5mYM9DBkjA7RE7WrZipurofofjfTnHTdzHa5F3Vt21ctd7msZtSBBZZMejWWj22pbEbDe5iyuvF1omnEFzZkw8KR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J1wA6e9bzu9W9ZDrxt5EEhP97LFdzDbk6qMehiFaKvrHKcjJ4trJfkihvakA2L4NZsr8d42SGyGmBZQJvLsPdeZ",
  "key1": "4rBNx2EHV5JmNYmvGwZgw3SmAGN7oxDC9t8xkYdVq8aZ94jzHhsRePzDsJfNEo48YW6fuqAMxATVKY8vqKebTNzm",
  "key2": "3csuagZUcfGcpL16CK82v1BE5WjMyQd1rMEESJSGYkBJzRUYHqQRfUiQvDTWh5X9qYtKp7HsLSaYNReFN7qDPL6R",
  "key3": "3FHFbD4z9h9HtNhN6djc8gN75iPfV5H3JATNxXQLjC2kAW1GPJShcMVEcvw96gfV3ekoxJJBAdRzRPrGEPZcM9VA",
  "key4": "U2DppHz4SLrfBjB7xPP22TdhjMuuY8pkBiR3FnW3jWuiJtEpjo6hvFpLiuvdjooN5X7WsVhd2NXwMb89m1eVmQL",
  "key5": "5C8UFVpaHxspoL9Gw2KojSYjhJyKReGjF7gPD4c1raAayyVG4z7pwL6M88mywjorRQAm7nMfiSv7B4JwzpnMk7mU",
  "key6": "5uPEsnYwxG9yjDZuAPAgLNseBYs2GmewT6m43twV7od36ffQzQJQ5v583xgwk7vNfuKPSgGnsJzmrpm7ebeNcT5R",
  "key7": "2wZBm1iRMagfUy9wAxf1xJ9vEztWrsDLj7tqvQWdrSPniaVYtkKqjHVCFf7qrzRHkC5PmQcQj7MUJ7tGXqeJBGj",
  "key8": "36qiKvb5mTYrCKNh32tZNu4WSBaktjhy7upQ4C3VzTK4PabFNfJE7v38pt3oyN7J4BRiw2YQCYNsv4Xyr1JqCJ42",
  "key9": "3xvHABeEfNJh8eagCAoYCtpkHuv3wusyay2MyhNdb4yHN4YyuPTRDCH7V5zRQKU4AiPeJ2Pz6HsjQ6ng5T1vwE2",
  "key10": "5ftP1a8PKYbXeFcrdctaqpYMC4n8bsVpqJ5ip3JR8MRALW5raUPiVVMUJGN4ZyRj5pr2S6Pj3ETNWtSu5vKkeUwa",
  "key11": "5tHeVT7BoHB8Pmn9CwqkYg6QoZUZxGCHTJ7URENKT5oBS231mvGCAKQnUBTszZ7dNAPnr3fdmLUuhq1DfGgwQ1N",
  "key12": "AywvGW9ysroNusfo6btaXazTAEuoxtQ4vRVfSXUtdGx4teuRinE3YRMBwzStvdooG68ghmJgTDMjWYDsqBGPDN1",
  "key13": "4C4FjJ88qs59Yt81CHoygTcVeWwvcpqSC8wQF3fCxxCcAPZCM6LfcR2AamcqPXQKVuvgYeuiy7LZJey2NCanuFs8",
  "key14": "4cNNrED1rGihtrsGiRP1edPR2sTwxMgzsfCFTFJm65V1onts4Cf6edwQ1zQhApxr8MFPpTNo7p6NBcQ2UBfE6bvP",
  "key15": "4f1yayMRMdPa2CtsDsebJE2jefhL8bjVHgEV8Ntjhkr5gSkedMRYHEhs8WkNNenCJXBKX3zg8iBiGUTgV1uEjgAS",
  "key16": "5ye2BRMUnGSheVsuUMLdtZDzH7Se4zBpp3hCZC3jkaGT4EuNYDU3S7fQF91Loz7Uo9abhBup6RytuXqeu1zbq2ED",
  "key17": "2MBxNzhXFjitp9deDMJ1ZAsQkeNiCEPVqCbGBvigR9cLu4TXk3r1AzcBC35KLgWqoJs6CnkwuQPW73XE2NRa5E5G",
  "key18": "2D1FkDPsRM4dcSXdLviboxcc3NStCFbbnDx8dZNqodhZaN9skyRTkPgNdJ4zXcfqQRE2g3ggmgZfiPC32dbTjdmo",
  "key19": "2pV1vitjL3QadR8MhFb1nfwNJojCtbM5ZbgN8egwqZCp21uJ8QP2gJyJyWdjTHntjHLHqQLcmTAmJLJgPas6AHxD",
  "key20": "56Y1CY1uByPRdUk57Pi8TGa6V3ADWhoM1XVA7pnj2t61DPB6zCWszYup23HNHaddvZRaf3rsZyrGaVaEwBn3dMqA",
  "key21": "3Th4A7u4yGPXK6ygKcwjQHr7a2ssKyuKJZXor9eMcGuo3TmYwVDcwSwKabpqCeP6L22jcyw3uvj4aPZksARPz1hb",
  "key22": "5d8fvZF6kT9YWyjc67AErWkJsWtcMNgWXra9ywzKaQ5DaWpKq552NgQW9FxFA1WfPvMgssz3D8LaUt4kAjKZBbmF",
  "key23": "4hxkfosA7jtQCQjbfkbLVBQi1i8GyCwq4twzY1yYyM2Jz5hWGvU49YMULF3bcKQ9SyaEVEenyhTYmiYdVKZjiBrc",
  "key24": "4N9tLUN3qUeyA7V4p9qZm4aQf3n8mJyZZ4PzNZsZD4s4VrQZ3gnkvitcndVQrQGip1KvMczf1H2Agr8mGaSX2zL1",
  "key25": "5kiWxvJtVoDn545F78KwsGLPWCicVSBsVqdNkNcz942s8dh8uVujvjFvtUUEwp7mQAd7GoTqnAYzB19wWwmUSs45",
  "key26": "2cf5fhKE6uzqiSg9g3UaVKz2J53emjYkjzJWJbHNzuN58dFFjcJR3QCVVnoKm2ZbUB5ekTETApMKojPWAuivH1TZ"
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
