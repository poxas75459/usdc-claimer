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
    "4XuEBnNeHry7CbJcqJ2D7TuNGbhRHPmzNk9TAdsYZbaefG7EUKNrKRNDz6VQ7qvKu8n4L6i7Gxp3gHuBNkMKCnkL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WrtZjC72C1fPPd69axsn3YPAct4qWD2NmiSAXd8VnnCNvqmN1VijkTQMKBgsz9CcZwFFxjyAEVadhSmbJysTXWc",
  "key1": "AQt4nte94eaGm2jh2uorVzNkjYZkk5Kgr2FqBGiTc5jtFjCUarTWWHxv6NRKe4hbh4bG3XqyoCYxpLXrMHGAiyB",
  "key2": "5Uezzyiy8M3r8g4GzontcVDZrGtXtjH2KBbaBzyJeTQRs1RkHwPxr7b9VHRP9EJ1XNGVxM5Dmj1QtYKZgsANPDNj",
  "key3": "2hY8gRusQDPRt4sfzNGXgUPas1egWonp3HYZ2NiDzBG89wUvbu2wjNd22yHwZiRaggV7bJzC932UEYaPu95hskrt",
  "key4": "647KL1LGromsYroLkv9KV83J3x3Vtk25wmxGgrpVoqK3PSS2WAPcE1eLBXz5zfDo7f78r8vKBFWaQc6uAqwRCRaB",
  "key5": "41pq6Db98ZcsrDweTkX1eEg3LYmAQxFBAX1tJGvz1CVigtYd53HhwGcWtNSLXgnYiH12YSNVCH74AtYqKCVAujsR",
  "key6": "5rPnY3N85evM5zLYzpDU8cyDvAaTwnvW8qspceuynpQJG5KbqTUZYcEgmiFymMWwhU99DgeXCYpDgVpj4nk5zhAi",
  "key7": "32HRMaQqecE2fgYsaej81BWtMaxhDCEPMmuJVPzRnRXU5xCppfEr4pXKPVEEP49DeHB93WMv71ygddEEuQ6NRaRn",
  "key8": "4wgUkTcGj1oi6ovEs4yokDCrwBUBkhtZFucAe7NhqBBNpCEqM7BmqG7FcBUcddtGNErWYGvcRKoZDuv7BNd7YXQx",
  "key9": "33GmVHJtNWLhXzTinDWzQw4ntUBPyqEzUvh8uzx72ztQHCo71b66hUdjy3gq3zy5gyDxx2JpwbSeUFV4Q6qFtG33",
  "key10": "5J69VjyQdUcgAdhmg7R3msPg3vGzsozSHBBxdbTpe2YYjTEK5JRJN8HraUhTwgRf2qaCK3C7AFqXbu4etk1zDLrc",
  "key11": "4917pVqdaE7si5tL1LbcanXtg7mFfKWo1NdwRjjFkRgigfGMmavbtCE81im6Ndrz8gobMsVMM1yAhr7gjhdQVroQ",
  "key12": "4HUfBTz7EPwR1aN6bUeYGyGiGctnCLyvhKpCL2ZVNeXbiTmx2c975uWSqoWsyS52zWNBsbpHB93Uk99Y6HhALhPa",
  "key13": "MELXnHsPCx4yiRgMJaKCpYZUrTcga12ERG5e6XCfwcokF3aHrRrYEeJjQG3Fn4QTHkBVQJpzBa16xokDm4usBVX",
  "key14": "2KuoSbawb2hbUMjG8Fuzhf8FsKRQWXQSfa2YNRSC9eeKFR722nhwP4rCTAVD6JJfJqdGHevzsJ4mqjtf6pruSHAa",
  "key15": "vdScHnyWsUu17tYRogEpjkKM85Ep7bCLx3tL1gPHcwd8YG6VfrMvA6kKn8mPAyJpL11wpF18rS4c5RiQzTQujRk",
  "key16": "vZUQVxku6o3NKVFfC1GgHT8Mx3yKgiUfQ4TQtP5rdbedTddcAY9ysjD3Mb5nGV6ayBiMvxUAaSHUhLfqxEVEPaz",
  "key17": "5A1eaQyfisSE3bnX7mrMC63rXbbpVrxv4EXMsmdF4xAJSs4dJnWxnqgSm7MzeQkzXHjJv8rn99Lc2cxmhrH5d34W",
  "key18": "4TXwhG9L8n3PG3yfyc9aDuQZprhvQYZSVtxNvXtVsxEzyEaYypzLtqKAAXxo5SbdSKBgbwZPmhQdp4yKvBMw1nnc",
  "key19": "3tF2pyTENEMAEDH7YSVZRb6F6rneJpNv5DP3HpEQ6NKHfxFDYnFFxnigB8cwJHNCpGtFUB5ZPiuiBmqrDyedM6As",
  "key20": "5w6Lo2TnkQSVvXnTL2jfmoZfKMAfLRg3QZhSfDXosxiNmjt2ArZJVQHVe66fpRm9MuaScQgvWzzwBLqUuzcbastL",
  "key21": "5EQ23D9A5PKMJv4A7rAm9ZoSSDuWtUGxFEnHmmqbJ1Xf2XF4z46CM4PBnXubEhGfArn9VTzrmC9rGHEqmtj7Y7nr",
  "key22": "3Boo8jv4B8XBDu8JyvbFPD9PUBmPKfabyof687ipYYDmtFgMAE6p76dFTuHFYW3iXfsAPHV41bn1nM3VTtA3HLhz",
  "key23": "3xhn4zfLcRR4eFiH3Mshvb4sac9SJDcdawurdZiUb7HKoPjjiV4pQgyRvcargVGeTkPmiQRfb2Tjw8eXBwoXJWZm",
  "key24": "2D5CcVCcyVznEoHrBo1nSpuQDAndKwaHkWi3GvZ3AogyVvucqgzmhnk221NtMj7afUAoUgKCKz64eN1wJ8Qhkpxc",
  "key25": "2cZJdYBK6NT65ACe8U7cZadcEBfSGC4eU9xk823usTBG54HbPNQnraBjMsePodnjhUMWwibguabXNSGUnfTuAgUN",
  "key26": "2ukgUvuV2uTmKRkamry8dZmUnHqgzXRcyYMjmCwLgdchz5jPzUehjhBvaYdi2myhFw64onfBCXLsTaUh1ogGQdLH",
  "key27": "2P4bgVG3crERyptY6EXZRY6d6XoMzLWbrbPyonMgATT52kPVzky8FEu1tuxVdVQgxn3UYRjV7Brr2ySE3YS9n5aC",
  "key28": "21EdtY8LjVAAGUNSMYsMB9HraFiVpt21rxJ5Qi8FAzp3w5aZbuWFpQzsPvz64vFxtU2ZFVCaD5cNiX3YyQKGcUn1"
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
