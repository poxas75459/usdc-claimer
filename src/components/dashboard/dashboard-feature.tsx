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
    "naSBsenL8Qek3GtgGRHGy2PLX6jicqNKm7osPtZSxyUG2ocHUwdt4RABWzoDqs1sZ92wErb1aP7PGxrQnZT9ygC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yHu8pyuLKmvgypGvGDwhB1d91ruGYD3UnYYQ79eDirSCHmtd77AUmr5PgqguygFpBywRnQZhwTkSsmKowGimTZK",
  "key1": "4VPU8JCgcsgiBS8ygKmsNcGJm9wNiTW1yUrAgBGcVJYPPt4gPmCq61jhtvi3qU2bifduySE4Ma3Lnmp29MvEHzAh",
  "key2": "47TGZA6KLHoKfq5dSMfvs4nfirQfmqLAYvZc4KnmZVsFMrj9oqBNmwfREqWMXPYVS7h1mfoJfSyqUnWfVQGKjF4Q",
  "key3": "24X8ra6zVd9VTkaCbFoaWwnZb8oJDsL7YqQijcD2cc596NqbzQV3xub5zTJFR7sjRq62ajad7XxTARZpma7hVvK3",
  "key4": "2PUbX5gCut8EJBAKZAp6G3c3Zu8wUDi2s4Hn1iEwugYoeCTQsBut9UN2mBUeHX33C3AZvdkzbsFcf6gC4VoZ9BpR",
  "key5": "57ZEJQFuRqqQNthcpwjABikA6y87KkctLsHXXZ4iysL8BT433Nin1kPXHdZhUhhWYs1rZQud8wVUaWLKSp1ot6BK",
  "key6": "4veDfqoWa1V1XACLvQFbtce7gXsMn65RBh8JEeiHySxHa2fV8C7MjRh2rYeMs2KAi7JqY39kLEGQZQir36fi4459",
  "key7": "2L2x9W2tm3shqV3wyEin38awhziY6ZWuj5j2NBoHy1WRuw6LYNHP39RsfRKdox7GHRSxKbyqLphnWbfsB3ZJrDi4",
  "key8": "3U4y3aJQLmUZo5wwSJyjsMetz1HY8hkXvPpaUey9PVr2Y3h72jN5ifKYoe1hjgDLCSW9wAxxEiBidjKLacjAiutZ",
  "key9": "5ZpExauVY81JJBvbe6cmqmV6MJB3bnbvRt6tc3kgQbVQArHhiGgEaQzzVFjVeRyubV84BkigbCLqt5WdabHU5pz5",
  "key10": "ZcFtqUnEGtL4VPadXmsoNjwQNJmFBvqwUPssXAsVupRdVLdpvRL7JajPsrLUgSeDeh86MWFqfPKNEgyC6LgaWZ3",
  "key11": "XkBccxubTaRVJqg2Zq7zKNBhBxpWNSKvnrJFC9t5RKRTTn7aHDiZJaKJ2yFNyVQRR7d3He94vtaLEagtAo7G2T7",
  "key12": "3zvDxBKG5s2pgFNGTLxXTXu7jEzJJfAwd5NWCUe1XMkAPpzVnG3RCU839WpndW7RZ2owhTmpi16KPMbmXDEMikgP",
  "key13": "3wupMJFdV7b18Bsyd5VxRkkv44vuu9vekbytyQVaXQcicn9QsZGuekUBp2trisdvRDGeQ7E9BDgYBzq2P97uRNdk",
  "key14": "26FckpwkeN7HjbBLwRDJk1HNAT79aCmmLxwr2k9xUCHqiRWwKhHtXgrriJx2XUDYL4vUVv5hRKFuQyPp8peBmhwu",
  "key15": "vherFub97me6n5udxQ7kzGtXMy2uZ35UDr5rwS6tosvXtxpHyFy5T32k6rDNZSE7JjvbYetndwkEegkn6enYzhY",
  "key16": "59d4ji8Tc8JhupukpFihZ3FzjgUu4N4jyy7JzDNFSfrA57Mwh6SyZbio48uW1XWELT4fF7Cqa9ANhibggbG5MLbK",
  "key17": "5TXs9tEokRPQu5ySM77PgXxtCsuxBddEPc7dfNecXpKXWxpFA783Jb2SY6FDk1W2YqWfjmLRZsunjkWjfEGUKZSu",
  "key18": "3qy74wZ5Fnqxkoo4Zr8esy4XRWE5rNZJ4Mc9NZDHpmnBeRCs9ymuJoGJteSxeWrgcXqqSdwYnMrucMpHBjdgMe2r",
  "key19": "5cSiSDA4szCRF3hLxyw6m2sjj79zvQqjFbRuerppdAvXXMsEmGwnSFbMKsKtrsyPRD46nnpH7W75o6eqPVXGGLbr",
  "key20": "35NeTBMrbxngvsYt1R7fkPFtz7dU1Au2YNzHBPJCmRLEECX62vyfg2b849tyj9gHR7tt9TTozH4BysRbN2xuwiLQ",
  "key21": "5SWVquXB699PsWuXVZKSAhKiRswY2DzbsANjn3mgkttceUfMZpowgqm5hcRBh4UmdexAwpGmpWxhAj29ySGEdnjr",
  "key22": "4GQwV9tpcniExz1tXNMzLGi2aeYcVuLH8uB4fWw9XG2JgS6d56odmeMgsdXnwUM35W8hmoUx77vi1n1hFfZ8YHD6",
  "key23": "5iBWEE1Kya5eghXp6MSPwgrqfJYRMHkzcxGBG3iA5M4QHre6pBT5Fr3cMptzU4qjTdTQZLQjdCsGMArruHqYLozN",
  "key24": "LUHmrPM1DBjFVEvZLVnErPyQgjbBVZ29UyFo1sUNnfJqLLoTYWnYaJFzx5uiRhkpiEnJrLQRNgkYDPNjLiABABf",
  "key25": "5RZfQjSeb6m9SKWgpk5W8Dp5Vw7ji4K5PwNtDYYKvv86ke13ur577GHPQe7kaRKNCj23idMoJqqzEj8ZwQxWgpgh",
  "key26": "m7zKH4eCYbUAwRtFPD8eUPmHiden8yuf733DR7FWmzuXoMSRsAH6MdZ9UoJVieSNtoa368ZfeSn9tZgLBqqzStB",
  "key27": "46eFGvZWKzQiqpx1ijraW5MZE2vNt4HVq4MGSx3T8r8yYwXU6c25uVbitSAgtLQ1gm7ivLJKYbf5uqfnUBteH9xa",
  "key28": "5ecC9PwgfoWt7evZtvSnbYyQBsX33mm3tSjwcSVcg79kpeFDF23sJsubbht8NLaFwnEto7FNbH6dTx3CANSaS3dG",
  "key29": "4hA8U1uhHewzvDmn59L2fTgoeu1HrDPtcAhUckLffV5dYDd9GD3aMEJu58kFsEPzrMHRnb9ZernfvBeri7hcNzpF",
  "key30": "2pGkfTGPNLWcfx6tf3RKoHrFCU9oC73GwkKcxTkhcCKFH2JzYqJgSBxgpMpX4uU6NeQ7yLbb7eL61HuEyamEkDp9",
  "key31": "2KB9aXpXWhFeoaLP7JsffennUjciBxv2bPqyexxeTYDTFaqMSJkxQymxiosAWn5qwxUk3WMLrNEEbrfPrbMshnBa"
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
