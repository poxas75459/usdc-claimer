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
    "5SjiaafuRDaLTvFyBWCGH2F9sLb9Wd45Ynffutdkekrj216XB1FJ74mts4CFH1Fyf79jR5MYfgYBHJ8VQJfirmQ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ut9Kg1xExbJ9e4EnprQ3MZaNDdR8mUGRoe5JJNW5JLtyJnJinLxtSiqxAdYgBVzBXcA2Cr2Nzv16iPcFobrir36",
  "key1": "3X54s79BSQZc22FFFRzjUKsQXM5JkhTPybkeUY99H9kCgAD1KBvypyXeU6oBD6vb69P28nRgwG3uThcchffrfocY",
  "key2": "3gyA1WWs8bVbMXkZ5HQoncZYiqbWBA561DXWUQyLfqdfn9UXhvHB4NiCS14JHV389DuLuKDFKA1p8jcsvZY3xT2Y",
  "key3": "2Gqemd3E9UBXTWRoycfFy2RbDG1bDEATC1z47AYoY9xEwoBThXZepxNQwPHUVRDyvLGbaHjSgpjunoaKat4rvzmY",
  "key4": "4SqCAzcrfCGZp2SCiNeubZpWRg5bKPEeohKEu3LceibWfMGihj9MTHUy6qrdEPz4hKNPzojnq4hwzdehCbudwMov",
  "key5": "5fctb8ePWMiZEFa1J1EXw7L2waNmeopnNJoVvbDfp9XK5qFfDHsrMwDetVFAd1VBcbGgb6MAhZ3jJ8Zr3AjJs5Di",
  "key6": "2P4kV9FtYmkzeDFwfuqgCe2WQMxvUo7FbaTLeSCDgNXHuWrkYvFmfb8VThs6Ee8jU3EWwy83k6gBCAxTdjGvLqA8",
  "key7": "sPysmxfi4tRbaK1h3qH321WrzyrdZfUZWLonML8tvHmsd1XWkHeH1FaFmYn56rPAUpzt768mNG3WkgEs3ezEAy8",
  "key8": "5CmxSnfhLxVHJ1yQQYzNSjQyX2trLeRHqwdE4Ke1JX7APUKco83fYBm5FM9x5dX3PnrFT8yerCwy6yzrgqH81qcD",
  "key9": "hPSYJKNLPW9HsFSLjhKnDHp8ESX9gQCjp1NRodqRD7ULKTVeuHR5PV5xSjJ4AyQ96eJN9td78EEG3FrqJqoF5LS",
  "key10": "2aKc8DtGW2qQZykRjWMLiuvqZNb42i4nGvgqjsfN4F83NkAgB3DG7XnkHV5p6rWQkspRnW14hzHTeBt3fyPkduB1",
  "key11": "54gRYhHXNpB6AwrbrU8h7ka2T11NekddNgHurWz45qqys2DCZuhz6nDXqaqr5D66YCrJGHQ3tnT78aUaZroQNWkU",
  "key12": "4VPVmYcdcgNDgq6H8ghtZnhAGfEHAEpjigLi6EPwC6M4k8DwAKBjqErNvuBB96yUNAAueT7gudB6LiETn1Uvbseg",
  "key13": "4gbFDMAE1bTfkpzMtnVVHcS89rFm8S2N8oZmvjSoxsmmoisdDed5VSVh3LVNshJAMuJFv63CVLoWZ3EhCgqXKQHA",
  "key14": "2efXmaLDEoB7XZ7a3pheyEGWokvSmd5WZ2qNSzYmzxE27SmD228paVeyZfqyBNw16z2N4AfJdvndaAW7xQ3mRohT",
  "key15": "272bpFuBikXDxqQ4BsT7xg7CVnp1fo3vxcEF4ckiybCXsUMqr1jgUveVW4q7en18xdnusw8oNwiUMqWDhpg6MvGY",
  "key16": "5MrLt6xnYyDYXLgu1G1JZpwJoJcp8rr7faHQ5BXiWSvWMXXWYzm1upxWso2Ks3MQW9d4BhtiRk7JVje8VMSGvVkB",
  "key17": "sSQYedEAL9Co7RFbLsj88CmYeB67ahtVmKsd8EZLWZFS85Za4GJb9tcXeQiaQG6afWZF73nHwabPiVbsTy4FZCF",
  "key18": "5uViVS4T4k8GRfiTsJmAL34hXyJg8DQnxxLrGMnQ3ymRxAtzFEzv32wdWP3sqfi9rUDnM8F14C7HUcm7yMCLJ12y",
  "key19": "CyFz688cpkDoLfupgqWjyZ7jhqUDyxo5mdFErbALGFympZiZDysa5jr51ifdDDzSx2sr8x8m9hxDKXLGsHtMvS2",
  "key20": "2xD7SndgTZihb719gPBUBmeAxoLXNRcbLsmDUYuNmEuUXJThseTat2y6z8m5L9bQg1pHtdwesq15pmMDro7U4ZJz",
  "key21": "4GxEbALAcFr7dAAEu6qs2FSW8yBhnvrEYM77thYudpmf7F2XBcJ6vvURFzmt2Qr7XKh3AJgk8oFx3F1vaF3phMnH",
  "key22": "4Qck6xvvaZVektCt39LSBUTewsUyxFiRrExo81stF2AFPfuuoYTPAgPWj4Z7gAvSrJkKc2jfb3URVAqZ67KCgm1u",
  "key23": "2skKRrBq5cgydK3JUmovxg7YPz6CuwWUmprpq6FcEunetzqZpE8CpZUtAMWdcpHeKGYixPsf4PoDbNikM5xsti2y",
  "key24": "37EmbXH8YPQSjFSAa1wdj4JjFywgWZLosykAy1DfmDHUbb5APpYUYx1pouGfzzP53e4djhe8sEvDMzqKvmyBS8Go",
  "key25": "5vXLe69iQcA9gsu8BMdhKGUbQ59jnVEYfsoWpuVZJzw2oNMk7AhkQXvgppVVdAN3dDEgrS7o7GXGu1fnQExjDgAo",
  "key26": "js988xzzBvLdF4sDc9jwtKPHN9vRCusuCFcxnBrn4otvv55ABD1tc1Sd9jwWoHk3QAD2m1tMNPgVDKukBXjzVhp",
  "key27": "5oSekzQSKCz3LwcR5g1tDy8KEgjy87WjvnczMT5cBXNbjNjMnVCqhr1Yr1JHo6hZrFHHbsYuPq1u7N2USLJvyd6A",
  "key28": "WHqkUA8JpPMtKpKtz2JhEYp7BnqccMBVYX6k9okvmnE8Ddgqyatt948HGL3NH9EaS2TzcVgazdf3CKEWUirS8kV",
  "key29": "532tcxoh3dGxUDWnwvgxMRjf1CtBdE74U7gqVv5CJ6chMre8zjo2BjawVWXPzME4nv9HB73P9U8gp1tcvr7ykawX",
  "key30": "sbauPVpgg6DAqUF1iwX3i6bkK8zkLptraDrt6hVBRxcy4xM1Xy6LgDknbuoVNhHBj8zmfLcH9cCkpFhdfcRhGGk",
  "key31": "6K9hhy1A7gGhEoEdxuuBUngqyvkUUgos2CtHjCKNHYwZeAJoJMcD1vssmnWysegadHKvL5dQwUSahVgiwfggsQv",
  "key32": "4GkvzxxacBH8ZnJZ4bL6J4ZDPb5aer6AYdnS7kyFayb73MmBhsEoFhqBd6UN8Hk73aUxv8gDoNy5qxQzAkqrycKH",
  "key33": "42VfoWswy1rDLqeZmxQVtD8VS9sq4pDjrrbWKFf7BZpgjqqjynBYkiP2x36Tr1XLc4KoR8JiATiCr4UKBE3JJvdC",
  "key34": "2E2i5EKpHw6FWtyJXVw6SmDAg2evyag2QaQoBTykWCvMxWvd9XLx6oJvLnvYxaqmTGq4FpiffttU5U4TD636nQSe",
  "key35": "27vKgtSBH2UWJyCq7a9SsLcPGhotCJeLmnn6xB5vS3FKu1F9SHQypHKyB3VxKAybch5bxZDpTEFWLvdpJnDx2RgW",
  "key36": "nzdkuEvdeUUHb5VRRJkYqBEAzmPNLW1eXjsgTAC1mrFCQxqqXodYdjq64gKbaMUgtN822xTBMVNXfuyC8cqZQvw"
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
