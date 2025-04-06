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
    "dfh9c8ceEDtPp35xsznURq6L87PJVsrF1r2PSDQ9HffYboJuagDuNzjksfm8UYQuYhtwxnqJ9rL6pk9vd2fNrqx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cRMTHVdjWhkYoHAS8rZR6MVkPMhqGuAwESSpA9o1yjyF18UMBsAmnQ5ySh5h6CdJ6FhMxWaBKtnhDGQNQLVCqg1",
  "key1": "2LsFKhxbVARDG9Ro3QhJMM2TRvudkqsMHMpEEEpHk23yHjYLX6EZh8SvKwkvQ4w7cg3EsxUqKEtc2DA8JpXf2znu",
  "key2": "4d7wUAk6xH75dp2nyRpY3VmST5sAc3bUZsDqrapKZ2VL89oJ5rcXeFPEDnhg3ZoHvvwCJZ5ujrgjwGy8wL6rDfNr",
  "key3": "4xcnJm2e7Vn9ieV4nYGs83FwSydYUjZix7EbwBN5sbJ5qJMhEXpRL3eBTzCjBBhz9yH12dwEVYVdEnr3zGprTY9L",
  "key4": "1xVv7xokuBDrC8QtFv6V1t3VLCiz4JkXzTVJfDyctr2a3qn5Jdw2u4UMzRX2QxBkn8GPfe1WTERbvDD5X4VQzut",
  "key5": "YhcL2Y8cnSabSRbp51vuGvsm9crYmY3tBvkyuQtEb7jgZ67QAJVJFuUZVYBwphLgTGTKjN4cWHfx4k5cEFK6bfU",
  "key6": "3KPbmBVAtDWPFHDY42b61EKFUC7ViKLVV92oM17DKkv3vKv9pUdPeAY9JRcwAyQsuQT9JPCc3GBpbfxaPEVTZqsy",
  "key7": "BZ8bAhzkgaFmuMMBgu7yRg7TYJrTmVoEzuenMUqF89ohx432HNNBCFBJB68JH6SsfBhEAvua7BvbqE5dDoraPRF",
  "key8": "3TuBByhq2Vy8yPtLHrUm8jrw9TVbmzfD6gS7FRmekfk6jxMZrbTVgWjyhAy1koee85PCJKVuScoXE9JSzxZqYiyt",
  "key9": "4KFj4gZudSqmrsVac2XLMt1VrtueziR1JWeQsdKAbFT2TUGkWEMMUGY94xiono5Zvneq8c4T9uWbCEmZDwgUd3UW",
  "key10": "3VCx1FgrJK6ZwcxzcPFXX41eW8uEwtHBLMSZEbHV2szGtEVKm4i5wAxQwz8FwGYmbWZ1T2aR8BXyD6ZKRAfQEwHV",
  "key11": "3Wm2SF8f9jM9r2w5wqb9TUiFKr4CN3PUZQRLY5c6D2f9LYpWL9x7SsHAMQwhPMnVEPoehpa6L1123DQNJasfTNUS",
  "key12": "3mCZvhC5uzMiZBeAre3c7pcifq9TU9DqZN9A3GAcoZiveAyJ1vLxAAykX3Yms3BSW8VPoDD5xNfusRPMQUqqpY11",
  "key13": "QjczzihiQhvHGDFzweHQQFUoZhz1KXt7nob4M999C62na3d26DuUhk2rbFNPArqPD84yosokiJiR2NjceVm7XEP",
  "key14": "JcVbeMmsiGgu8EYrLzegahXoEpEdZASe81vXtxz5mTwPGU68DDTrW5zGAbgNkBdHuQqmuTXYR7MB4o4DusEA8Zz",
  "key15": "y8VwptXSy5c73UndbjQXVwvYfLNcDSkzDwqPLLvNhpeBuGT1E3WsUsv1uCG1VG3e2cGkDEFmHoBXGfqvzzg7VmP",
  "key16": "5u5JNUoP4kDENRbUfRQEYH7eBtCZiXggsAnMW73n7ALF9EzozbUKTMKENtjV1zcwhpLJaXvd3wgB1JgQbrdc1kBo",
  "key17": "kb75ipANsSrKMa2Vyf2jvWyYiXfEtfe8F7mwwCZWzzAaRguhS8tydXQa1d4YH5UrgMVFnUaEdJCKHMgEcGNRt1T",
  "key18": "658FMTTMVvLmYnr6mbtf66E94YY497SPwdt6tRmb7E8AfQ78KNbiMkD8mXdFMCKcPTdVR7LG6JiBYoxbbHQkkdqR",
  "key19": "2965td6RGsVbqp9RWmpH3UUMt8KdEuuGjrNjrYbCBpi77LEvUKe96ov23VUcpfyzbZqnjUtehfkn1DRuWLrNdu6K",
  "key20": "QdGxTtjxiPQTHi2PANkL25eq7qo1kEawq6jTaEyC85qALF9TwBDFAdHFg9rwBheJyzDUZJrkQbwEtqRf12ieEr1",
  "key21": "8fiiwdTEMdqCE31nk1KPnRzgUumTjG1GJRJLv77BbPuLcEQ4eFe38xtoh6DNyxB6vj3mn47bpLJ1kzoFmS8B7er",
  "key22": "4TS6V84buecsnaF8x5AKAW59o4TnrBBvsWRXC4WkjvsLUBZM4P9Xfmd2W3ad3kxq6pyxn8ksPuhgvtV2VjEy8MVd",
  "key23": "4K2KyHFWbWiJp3GfkWGeYhHNTR4vz2MoVTTTzjLkYFTR2oJXVNzsaWmpCCLr3RyGyY2cZh3bCbX2ANhPok8mvmJo",
  "key24": "bEGHBB37VeUTJa61DCSEex332Fb8D4rkVTVRg4V4gYdZZRbidwkco2BBHqT6XLwaJUHjdunNMBM3mtyzr4dicbF",
  "key25": "KDhA1CzpbQLCthJ9MfhAf4jLxYBY7cmDdwABZ1UthtymUev5eXScv2E3hfkDRCMSfRp5gwbHLzUjLUvnWzgBCwp",
  "key26": "5EV9Zb3H75nvNdggmJqgBWwuCdbjdYw5TuSHCLZVEd9HjsaPa6WoqZxfox7tFzb6TzKfWjWhJZPieyAaSbAntzuG",
  "key27": "3sAuqQg3YPznptpRJirEVJkA2dra2WwmpsJPQQASAQopGENimmoZv1ewsUXawXw2BD1WGnVT2JXdaF1TJHjKvUMT",
  "key28": "4hYYcZu9cypiF75wCKVcBipQzvLUZqjVzYjW5LqDpr8wt15RBCKXEop9sikGSPDcHPWTd27F9BTTMaKqbEnEcyuQ",
  "key29": "5KwQ6LdSuV3HjY9VAZXYdAPqqEbwPjL614qNtJ8g5pm2K5FoPAdqK6CZ7YrWY51jnUYA73ZaDQsTYVu4krqs8644",
  "key30": "3Z9P3huPG6jUJhN1NCAPLmcaQkdNAZryd5HNFdFZocqYXxuy54vG3TZt7kpnceRANCdn6zU8QC83nNZdQ3Dzxas9",
  "key31": "5QBeVJdWt6TX2wZ2StXPpkCKJfWfTAJ5eMphRJiCQu6Bt62jSBt1EyBYy3vYs29d5j5SnGKKEhi4ikJ4bKqnYx5Y",
  "key32": "4T9N51yDrAx8D8zSTgaY1baFdrunAJmbSLTYhtfNw7ttnMxdDNstuCVp2tvSvyNwk6UX95u6Uh35MWE5annRkPGQ"
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
