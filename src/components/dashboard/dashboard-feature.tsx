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
    "3McwL6gk9wc8bmfY4TXUzbJ9C9KYAPBj4izJkiXHCbziHDa3Pmp2ejGLLwpL9CgiDEmDsXBKxNeYfaRnTbdgdH7S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59Cmthh5K383xrEWLpte5erM6D8MbuYsx9ar76SibAV2B45WRfBD2hta46ooBcgQrSTiVGrN84RtGXtvSkZagy4B",
  "key1": "5ZH6iivrNxcw369ZwW2TJEyEcEB7ZUrgRAjjUb4yLxkD48hCXsXhMNfF4Y5ae5gSVj7vUrKAgmXmqtbrG1y36N4H",
  "key2": "3QBN5fmLnQP1SnZptwHpKgXBeBh1nNJL8VdeoVSSbpjEWznvdMCXT2Dk2U76nADPY5sS3UmWb9eM5aXjQdNWndgn",
  "key3": "31yLvLcMBPMLEzGo8EMSdcAqzsc6gonNCmj2FQxfnYXDZqkAuaaWB9Ht89ycBoh1CxAg9Z3kw1Ay3TcZo45rGyQy",
  "key4": "khiVXQK7uASiRHQYwkQrdbwrTcfPBzjTQHj8TbGU86XYdVJFceEDfXo69HHY5uiaT1NcrhPob9Gsw8jiKHT9uUZ",
  "key5": "3qsUWVimJ3Z2X2ErDiXcPb6YJNAhhygJg8JSB3E7s7c3RSEZjQxc2TAqHdZ3Ut158L9YBy4AqkYFmdxSgEWHibsw",
  "key6": "3oAYXyugjqBHxP52EHfifThNyQH4Exo64auUd5Jz6vGagxMJ1737CuAqwt8Rii6YFFgnbwPBXoAnnd1W394rfwfn",
  "key7": "kG9dg2RR6nC2ikdmoMpWmpvdWArYYsCoxY2LBzEKQ8jnRpkV6j24y4pVY2nbEm4twtjW6nVadABxSLuURBZbQfm",
  "key8": "2ch595j9etgYwnmVBA6ZjAcLsPgbuojAAb4ZgNTWcxapedTULi7fMmW2UkLgC7EFXrs4PoTi3etE5ptva9TaZNUx",
  "key9": "51d74Dao1J2bRLwaT453taEEVdXNPDdUtyXHbZ5FCdtKznVdHMi5iH2BNe2euF4Zpm3319F7BmMGyXRzrQLYUCWE",
  "key10": "2MZrWuF3frxhot83BhyUafG6cyPfCMuF5moah5yY8HbLzAvbuUxgM49Vg856ZXo9ETyUKfdvJajTri5LFn7bymTw",
  "key11": "rrPm6f4w1HGNz4wWbyf15Un8f7Jj4gs83srzhGoQwtnYw8wHWb4zCGAA9kSd3WPtQGszZBKAAgbWhcGhXKCUkJz",
  "key12": "hsuSG4hZBJWefGa54RjKXV2KqvsUyb1wySdxSRAChqLhfMiLqXfuTLxgnFKcZVekVUQveVJDjKKUMasJaVBtudY",
  "key13": "WZ1hk4kLqCyAd3qs5TGqF9gucxd2kroGG92mCur3sxYzxXdsSK9vs7oBKy6xXtA3sWaX7Pb1H5V5XSmNGxgEN1V",
  "key14": "2xZLvQ1JT7FDTBg7DHPo6BQNCkwQZwdtwGrEzJSasMkxqnK9kNzHhs39YgVB111kA5HDmVRxpynJeDtuk74Q6NKH",
  "key15": "4k5LH9LeUmctfCz4RJF2iYbrhP9duzruSkUVtbYJanjKANX4dJgDFjhS1DktYbJCrhmGbkV2D8fATCJSjZ8XEVK",
  "key16": "eFXiTCUNbQmWAUrG4PuvRtXohrZsQjoP8PZUaRaYtAKLNsEwoeGGtv5cQhWkshSYTM3zHiWSbSmJmR1qRaYpn7y",
  "key17": "4EmZM3r1KTPneEr6sFqmG4VAPUAKLFNSMmH86dwyjvrbm5vCCj18DedPGnA2jyjYfmMau68wzv4SN7P2at6wADJV",
  "key18": "4oKVGETouxNB6vqHLPrmSpTGtYEFJ7GBPrhzxEf9p9a7jq5omkokUH7e7aZxPNgFR5ykHJJRFUx8rdUoAjeD4KVW",
  "key19": "5GA48D9vUwKXHyNeEArnqbfbfGTXvWU5djGtmS74mzyqJdodzd6vEogmdLfkRbgnGzDeiJPM1yfy3mHTj4Xkg3TQ",
  "key20": "633LYrU64QTRfvpq5iMMaRDgE2CbhSV4QaeF7VVua52kHEDd8sebcZZSjfoSZ6qNy8rDTKgheZxaNBfXbZWujBwF",
  "key21": "2yoVa8P4G95PdaT2fw5CyoyQKhDyN7Emm58Ng4zTnQNioFfi6nqSy9b4qygwPpbn7nCAckuRsPwmxiiPj8Z8QRL1",
  "key22": "5zFi4zarjYZ1SDPj8ZXvDufQB7prECp275mFGLGytY8eF5kH4WPk3YFm2vDRc67SZmDUtcNkTPWf9wRvbhQrjYDx",
  "key23": "34Zuqjdwj3wag344zYQWvS5vo2DV2oSGdCopoJeudHr3axGQ4okbCSyqSydM2cGz7HsjVCQo3oHY8Jgw1QnjLo3j",
  "key24": "55LbJAXyHP9FW2L1np9CSCw9jdb2PtTwq6GLa7tWUuhy26FKPynArajMWNNYfiwh65kxLM9kNUAam7WEfuGjytYd",
  "key25": "3fs94z5p7KeMtnyugitjiPGM4W8kGQyb74n4wYasgP4M1vfRLU6Go1cojA3pUYPNdxv71ttVzokYcT1o13X3ZP7C",
  "key26": "4kBdwQzhQqw5hVcAN8bp3bUH8RS1zynTRoTUvcju5r98x9ys4vgCfQZVQf7SxBjVovLhwwrST46zrqsbqZuFazHx",
  "key27": "32KL47oWFxPaFn8iJPkdFed1acxAkpECJ15GSdsPu7wvUSsJiuaarxcdTgnwyqE6TAk6DvEsQvYnb7LU3ZdpwAep",
  "key28": "2CnxC3bnqakSuMYhUWgwSK1oWGWY4KCauA4LGVvsVDbn9P6b7HKzLvWVR4KQA4iq4bLE5DNUBLnEAQq2cEErz1d1",
  "key29": "3XHYeyfaPyMuJVjPkgb6gHoYfqNwtZLc4FrvRhR137diu9ShLkR4xkEdUUXSuv3GXYnVtk7ChxLMXdEKvU7V6D14",
  "key30": "2RkM7e5miSLbWcA4zmVsyZMJdm7W8xXB9V8giW1HzEie1NP2p4LsSrazYpRDc59Xx5c6rLpiCGBrutVAY53cewDg",
  "key31": "4nYpJXkoSZtMZLXunGKjjNGVJSAoDoQeC6i9qx4SSczbK6Xz4k6v46XuB4ZLd3aTSJYkfM38vKGRRZvCb6jpvY1d"
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
