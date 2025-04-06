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
    "5ZAXVku1SYsocFGu93pDAf95i2mz1gWNShtkQ7HQxoSMEiqCQ1QFfjqCjM3ueuX2VrjBYrwgGX7dArd147iqSCCP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35C1B5JMAaksG5ZvefCJqJwpg8mpNfBL5wAV1RTyuYYRqRo62LByKTbw7xzVNLvgtLCySKfanGPoLE8FFMRMzsni",
  "key1": "3hLhbkDZ143Kk9YuBisuroqLHkNeRX6D5rScygepGTDsbYDi3n2tcoQBcSzEH1TBatgrhBLbzVmBXBJNBjdDt2ZZ",
  "key2": "4HUgF6StojV9smQi13WDqEp6cARU3QYS2PPaWLHCEkPKB822KXCqqAv88MNvAYAG8vejAYahPRCbL4bhmd1EXwXs",
  "key3": "62H9o7VuVBgyDAkMu46A8qbx8Bra1V74ogvoy4X3RtxaPU2yZfsXsm3u87kTAVS9y6MHFifhZrH2GnsVrqfFD9tV",
  "key4": "2uyaCJtowJNkGUvnNyWpG5UmHfycs4cbbK9NkJ5oQHDjh968u7XZkBFuL67DscAN8oetrWqHVD5dXxX15iMMjqx7",
  "key5": "5kYokTFfz9oxdNUFkuYf2qLBKzEeSjtBq9FeapYYMXjU1mBS85xK7yfLCY27JPgogWajhAxKo8Zf5JwezBzJcZMt",
  "key6": "9dT7BAyVf8hLjuqgQhmYXgdAF1x2KNcenvz1bjCjhxceuwQLfSAbqvR1G3EvHj9GkFFmFVumUS2TymQPxB7mS3v",
  "key7": "3h596yCbLKrBakobwpQpXJFaNnz4Nge3uuuTHGx2NGWXK3ZaX68nZuFFouMit5ziDzxFXnLJPZWyQenryS7ovFUV",
  "key8": "3WUx8mtYGqpjE1tGrokjj6RQ5NCtEsMTrpiJSJeYUXpRoUwvDfDJFahdCRMsDHS5hkAhSLwW7UDJ7u3udY8odueZ",
  "key9": "4MKnRRGH5fGTuukDAyG63xRnaBNT88D7aRMDwsPviU3p4LDEktY5SVcPf8jMJKZJWaJSw1JtD5dqUnhfmUkzMcSr",
  "key10": "3Rta6mF3FAktTCRVApzUH8Z2YXMTVKr5QWf1D61ThFNNoXyE9XJn246Wg37YNcy1xQrdyecS9PTWbRiKv8XFm33m",
  "key11": "3pQCksP8S2mpBNWteEFEBhTZLuKTLjBqgvGe2nr6MkgW2GdrR1nhoyz9ySxC4YfAozS2qzSkNHJufo8TBsEYoiS9",
  "key12": "5wSD4ss1xevquPryopp6xXp1i1cpMqBx4iw7Qhi3uw1qBdqdSyyTDGyLEpaQ1dsMmYmgvSy9Cey4tRXxDpNiBRjM",
  "key13": "3DKJXYjf48ZxG2RwBgucPfu5tLpfo44YuyDR13CBmMQmpRRSo5haTJTMNGUu3UUKVG6q441AwTtgYqLMsxzvDKLh",
  "key14": "4AMbK1sDqaczo46JAssiJ8yEhRdnk1usDVWD8akGqxK1cMBGf9Sb7SWyGVqbzs68qCJjLt5TgKUSxxVqpxKrC8Hk",
  "key15": "126nmKpYDuxSXdNBiCDznrGEFurNTb44ea7xYywB7pEbVEvJEY7FMEewfHGEEEegtmfNYHmL83eLbz2vVuKH2Aou",
  "key16": "4s9mX2faJ5T4tJZKt99t3u7fmF79be21pUf3qL7kVSPQ32bHjbxDfdNmpGgEKX4a1DtXErC8Hgttcz3YZjLH5QWa",
  "key17": "dnoYLqXT39nXDr4rQehZ6i1685xJHt1NyG7homDW51XvX4qEDXmUpJzKDd4QJiuwUKZ8dpbbjAcFBA61ypwMseG",
  "key18": "2sS9eBwLDQAAEFLusxb15cFFTuJnKWLTjcrS5n8JsZppXavdpprYodPoLS8KHdvEvyxACr3WRPVJWDBx3e8pWWvv",
  "key19": "2yBCxQJ3YYgCfPvjDWYReULTk7JbrvZYUy8nN2oD6n4tCS1sJTXhAeBnptJkxHrxm2UfVT6KUVbQ441bZFcFCKF5",
  "key20": "3yn5G8dERAKkZcrugm5hKmAw6i2bx4Wap8yW9HdPfZL9DNdDmkURjfDKDZr1iHTwaHrzif4LGjNEeoNohtuMJuYw",
  "key21": "koMYE8UJ5PkxPKs5Fg6yEg3Qgydef4jTE2qTxnqpGbvXmJknpd3jKxCGchqCnq5RFiyrwaaR7FDTduCA4a4QaMu",
  "key22": "2KaaAbbaVuPYzMXz3M5TU2i5B6Mec1i8Ydajbg7dH9ib5U2DuccCF7EYY9z1kB9qLNtkuPXA5ukXXuffJeUQVU5u",
  "key23": "73uWg3NPXPZn6tULB7sf79YLBANpTemzVzT2r9dvhs8FRRLJDu273NqvpprfXWi3Kb384FT8q45aH6oJn3mrR85",
  "key24": "3WvVS4ohfANcd7JCEB2oAHjAqcoTS1egw7mquaEYdZegRUUw6cTWpxbxSmXLPCT5P1eppnVwhHsVFF2saw9ppMHe",
  "key25": "tszpnh6CFTmJtH3KH95iJ6MEsSiWWxhFBCQnbwXemMvPW3iSsYjasJBhMPpTQReBXPQyswJ8ihL9NP8wMXuXLbR",
  "key26": "5MSTizqxT48u96S1DUGYzsTzGkddE4aENdRGoySXe4ojKcfanDsYsdwW1D5S55GW6t9CcNTXMsr9VG92ogx82p49",
  "key27": "4mD8hWQZhiEXrJ46qc4PruBtZETkkaxFeAfpnrZj4XYNv1SSGkTPZBJTfrJKAkqfsu3MViNAgDMAsnaE9BbsVUN1",
  "key28": "38rDYA2WNhtdQ13AcxGpnMG6i7uMB8QCNCkwAxB1KRn6ddVV8YF7uo5qxWxQgTqU6RAWJoQpbUNj2B9u4RgsNHEu",
  "key29": "3af6e1dqJXi5iX4VKktZmjmSaJo3HcwiUCYgGjCbN6av4nu54EjBMFJbjuo6Jjq3TYdwmT5maWg7UVpZ5kg6G3KP",
  "key30": "5VSAbhxCyPMeDpma67dEb2LpoYyafamtkSnngp11ftt9fjbxpy9su3BmXYthaxWqYH9FPMpc9VVvpt8w4N1ZyhoK",
  "key31": "5njTxBvFNP1wQZDgG9vHdj1T3myHx4cAc7W2dGfZpqJvt3R2i4bS6ZBZepjTxzrNzJEykGD46RaeTppBdDcZsp6H",
  "key32": "379XbSmqRsBR5wjSqhs3M9ciqXP6BvohjhrgUsH1vtUbaCRcP9c1MkeUUi5pHEvqC4iAPptLeGgshaD82j2oiY2W",
  "key33": "Jcuqz1qoLyrD6LuCZs5a1Dpn7j6C955kiuxWBSoK2j2WCgp1TUTj9wuRPPPxGeKkCGiUQo9CCWUhwcQzcGHWRYK"
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
