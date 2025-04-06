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
    "44Z88K2ZnnzYof7uaVGJfTUtLBfcNpsgg4B6CsoqLPF7VriUEtF6kVbwGH8E4p6tcS2R6kXPcsmSyMu1oitmyPJF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LToq6jAu9bVM3p1WCiX2KrRP986Mib9LPg5VCVyT6aF2SATuA8aDmztRAsia3oBkTuKKWpQAhAqnW9cUgnBg32o",
  "key1": "2CLrsBXCotJCxtPndqaQT9Pyi8hQHzzLbuAowjb3W222Kaei5c26cH2AQKhCs3PfLoQj2gGRXiZJnavkrL6dWY4o",
  "key2": "3XgzZz7CWcZAHcXSg65qxXvjyWUywoj6JqBNLtJi85mzUnT992mmQmQz7FzbPbK5oVqBRDxESbSnapiCGUGnLLsa",
  "key3": "35AThnbFPUgxokZ4YLVkhRJ39kN5QZJdsmQgqPMEM4encP1K4BWxnrbPF8gVUyisiuoNC9soXgfsrPeA5oxokTp5",
  "key4": "3FSntb9BPzArr7ZJN4LCr2vPFTPrhZiiQjmBDkFAkZeUkNN1xazv6MeTmMAjBa23mZG6qSKMxVgkXY3d3ugqL46S",
  "key5": "2nfGxQ9uqqWWn9ZDEtkucaqvbA7VMCt2hjVJQyrSRufkRtQeaqNqVtMPb9Ubt5X8Wt6dNCg72dwFy3Lv3uzqczHp",
  "key6": "342aWRvbzNcKLccVhpZp6C3R6GQbcxR7iwxHugAVvN48gs5j5wjsPuU4vk1BRczLY37zK7pehRfYEM8rs7k6xYrJ",
  "key7": "3aUM6fyncFtqx4wyEXK7wHLe4hbJJitQutbtsir1w3o8WgD51fdrmCfWWhZH17Gj2dHCwT33XibuSR4XF8jcow7G",
  "key8": "34FnPYut1JsGbyLTp2pZejf91kqhAnHgrf2MNWC3HXajKEy79nJqV21eNxzamy7KHPEQDd4TXV2hWvttM5oUf7vC",
  "key9": "3i4VLeogFAnzcT1vza2tc8fzemVYVfLofircAS9s8JiyfqZK1nWXpvxsS88z9EzN1oaJx467B2xQcnvPhgRJxAum",
  "key10": "HEArYbdFyTs72CAC5SNKTRctrWuMoyg82FEB1nnKaTxbgc3CKBbuAK61mLectA4fvbZEFMv9Qw8B6XSGYF7mkLi",
  "key11": "4zfcx816TdqQp2DGBEQHzYBDWE4wUrDFn6LpBQ7oE52rVdfVKhFusoZyWqahdFB1o9DyYQi4C3BvMmvaXn4dEwnF",
  "key12": "3vifJHCtCCGuYNAnN7qUa48q5uW88Fg1BcWheB5aYnirdeS9G5Wvxu23Hf2s2wEaUVioyFD2nBXY4s1FhdoR7Waj",
  "key13": "XhsekfHj6m2gNqVBB9CwkUALfZN58qmzkGKWy3TL1HZUWoam3HpUWaXQ4SuP9AnnqsfEtE3myeCBnAUizQRuZK9",
  "key14": "5aohK4mkwZNovU4x5v9fY36awSZLrv8oCzSwVdEboDTFYRcd6gH59xNUi9FLmiL5w27dbtiagKBCarGMJJfwD1BL",
  "key15": "2rhtbtgCYdogMaD6HxkdDmAk5uc38i7EENWWAH9ojed97CCpDeYZz4Acbo7PgCvVYspoSHK4xgEX2ApzSgqYsCq",
  "key16": "3s7u3UGTFhUaJ1eDAe3BTgVfSyeMPC4DsVbsxPqUcQybEGZWx3vwS8hu6EL9J3uP3KVr5tmXLx6A7GhoA5EMUHWc",
  "key17": "47wQxnGaQpCMEYbftwm6qA2STzqGMagZ7WMo3CPxDBaaxvGDbDxo5oRBTo8Z3c9jDRP7wvwGTL9MYmQXsnWiiZy2",
  "key18": "3CDacXFSVypsgjywLUF8v3hWCdsJ2LkZcR3v3aJUb3ioTzumayrnjrvJM5daXBQ88pjBkBWap6oW4h8tjoTm3JxJ",
  "key19": "23CvkXk2tGGDTXbNe82jydtNhdN9aMKwmVsKPrVvr4TRWccFJ9yp4zscjFgtxZFKCZiiHUE7KnHHcbDiFexpPP6T",
  "key20": "2c3hkN7HBe4Rh72FvSiQ1QyNGuVcFCTU1r7kDx3rRk9dmnbqgbjW2hfeUqPnH4ZsPV2ACBsxsykKFonspLNvb7pC",
  "key21": "2Ajemnr8icQ4xKMk5cFhUyfEaxfbwoxuaPSprFPxnyF6jJYpatgCm38Ffhv2D9tdRhLq8M1kjbKfbCURo8hR4faF",
  "key22": "3v6oVSUuvQ5cNMCq1xvTGhixbBH93Dco4y4GszLzfzrMFYg1DiscLcNxbMerp41Mar7AwXuqQQWrg4xDUKfzoSdz",
  "key23": "2KuYVMXfQCAbGbuy5zFyYCjYMFFNrYmtAUbFDpjkHKTbsWKyEXmwHwaCUSBX3EwyNMNXkYaxeTECivkezPiuBgcZ",
  "key24": "5Nqn1KEE2J4rzYE4h16gdCHjGEbZSJ1f2ZZ8KQghwMLcWNfSpuRra54bWgBWU4hUJDqBe4WTChEJxSrTW8gaPeqM",
  "key25": "i5ejjUej2MhwFVfQR2FWMTJaKRpUopVChLTgPrRjU1ERhujVvdJwJeWcTKY4YemtNiipbFscjpC8Hpn1ewttoz2",
  "key26": "3qLQGfUXFLdXyXjcqfRvJcoscfewRBxe63YQZPQWvGwFNsr7KEz2atbB9iXLGPYFuCy6zB7AaK3LzMi8BUKUxy6f",
  "key27": "4J29p28JppPFHcJ14j1BgJ5d6PxPRzDobRcKrTCfvWEUn92saASKWjSYCh9SkpMGJ7on6zyzVcWVWUA9WZ6mTTYs",
  "key28": "48pa3CVvZzvK8PnXjqGkxMvgF7n9qPQGN8bXd5rdsF8dWmt9iBPyfKQVUxigLma1AyoFmCSx1Eahz2Bfr1VM7yhb",
  "key29": "buscLFY7MYZccGxJvsooc3TgNGrKF3nKVaBpxcbrFYYSvxgrykviHUyqWL1zqvLsyXRDBQSZvQDq2jy6wgfUrbj",
  "key30": "3ek3hf83h5JKVhrq7gi99Wtyh9721FiA3Db82mBbEAxw2JSrQ7kcoKfNaN5tS3D9hi1evNvLZGq34HcDXzDofD6D",
  "key31": "5rmYfPnDknof5Rvo6XowETy3Skf2J2eDgeVWvSm8urhYFAfLGGkdvUAvo51ju8s26ubdwBDVQ6Vj3VQtdRAT7mFn"
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
