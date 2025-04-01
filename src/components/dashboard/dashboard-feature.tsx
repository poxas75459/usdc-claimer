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
    "ENnEwvT5RT15hZt6Mxj7Wh2i2twF7fj6oi1gnMmKKzpaA2CK2vfs9oN7AxP1tYTCGZLt936ptKYAsvetCcaezo8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q15jRUG675MdmSGxRsxgmCt7dpe9i1HhTUsPtUDtGTrYeyQhLi1y4CAPCuTQqX7Q21iMaG3EyiZ2phU3c25N9cw",
  "key1": "2CnUb1oGCTo6xdgAhQrNM4Qr4htWTHkGs9Kdqme77McvC26z59xkuQoEDsskHaCBRKqvtiD9kVH5Dop469gXxHce",
  "key2": "3MtzVfjKLMaemfvboDmk9rt86B9pCLX697v7kEUpKkqoEhtDaFd77pbB7oGDpxSq1K1s9Qc3ixuPjGjkkDnrvcb1",
  "key3": "2bWhTvwY3Xg9XA1NihnnbRmde59yuxo3YAN3rZeZeVxVbuTeX9DZyJLaxxjftQZKAxJPWE3bKJ7LVyfGwmVCzD3V",
  "key4": "5BPekTPtsMHaGShWtihd3pGTFtyNWZW8Ef7SGxkn7nxic1NP1fxHUWstZ1zbFASU58SLkvbgsT3syLjZLWYeEYec",
  "key5": "3CR4ehU9gfsB8YecjsPhifJ3NmLVKH7NbXSaUj72M3zrNCdz9thbe25EwrxLBwTbrYnjxZWKQBkCE9fNhJox3Mgj",
  "key6": "4YJhYSRkH2CvaKXRn7S4ZCSFNgNNinNS5QyQW6D6gAEWnDVZSM6rnXXxBXLsmCpjxyg38edDLo9u3REV5AGD6wR",
  "key7": "33JTrU95ZATr2fFYSm73PZ9ReHbNkX9oQLZ2Nc3J8mn8h7GR7rzZmvCPzoARU1qyeHQjXYF3VZKyGo1ZvAxqFU6b",
  "key8": "32kUiV9q88J8oyDEfqW4G79nvSzUcnJ52AFa7FyEXKCY9u9Db4BFGsXjqd9z1n6jfSGAdqoVGazBuh1dHCFzFTCu",
  "key9": "Gck66Vh4JHDScPiWu9w7ELTRsJB5gW6utTGpJ5U7G3VSUhWN53eYqxGn336JBehAxye1C73bWE511E8Kdavcuj4",
  "key10": "2vzcLDCRfKa1xP83GjvinTKeqvPjFPdsdrYjrW88m8fpDY55vj5QzNrJ2dLouXaXizV9LG1QsNd3eM7q6r2HUYLq",
  "key11": "wNexm2cm1T3XygEnNxetgUr1UpU5xhBuCTDsjAuZiKwPonj6bLm4yPL38ZBtmkTXaHLGK4tmNrQ93d6hrtrz8cu",
  "key12": "56VLLsbwb2acNciF87R1hhdAvmmMrzakyfNzaJkdsRaTXpkr6icEks4RkbmTGiw5xruSmoYfXwhusUTAsXpAo74t",
  "key13": "WCDQsx2vY5dhsAYmbVh3hcJ7ycp8Vux9NXbbDykf9RkQXBbcPegMW1FVNjdcoKQ7Th7dX2DxsiwRcDjiVjhYwqY",
  "key14": "2F2EmAYJKcfMju82Ne5mtLy5DZqnsrNsWNtRYvA7f4Waa7aBYpSiggZwBRGX4orWsWRH5DSdrzAtirvAN1gxUYUA",
  "key15": "3TAkmmEajDEnswKeEKwrjR646W4TFUkzYdasLWe2kJfr6cmexDTDLSDwSqwDbuwrkcz2QNuDUUEu4fhuKbSyyLFd",
  "key16": "4fFCRgzuV3dGpaH8hQxQJvo6oNTrfABfXsKNtzkJcZ3rGxTgE7rWw64V7SmwLJiaz4sNtFUWqQV9ujsahSB8tx8r",
  "key17": "57jSU3bG7whZTJp5tDiqS1CWLw1GLvNYnYEfa1xuiPCSGFyzVZgTSHuso4HA8ytmd8bJJVTyTas8PHPZVRdbXgpP",
  "key18": "2vY3aBBianMzh3NmLzJVYyWYXUUfPzDuqws4hocs9kHMc2mPv4mP2mauPggkKdPEaz7rgj7USz7C51JbjZdayvrs",
  "key19": "55UvJnYjS2am2nwWd3eL5o4r3UfDRg5uQD8UZj5nJYDU9vngJcFsn4zUbkeh3Mg9EaPaTfZmpfYHAjyevBfu89zS",
  "key20": "4SaVEnheC5gThCX7UnVhfGQfQ6MbXLzhQRwvbypnPjCtHQSfEWco2jzDjftWVvtq2QTAmzTtF6WJsWW3dFL1dAF1",
  "key21": "5pL1oSLDyQeHMFdkii5rdUzohp2YrV6bS49fKMEq23uNJJBJveV11x2omEPse3fogr7BPkNUndpME3nNsuwZnWTs",
  "key22": "5vpZer8nAjsJm99kfgWBR3ESHKwyCwZccfdU5KjHQ8HN4PerMbbXBbyncT7oSVZFA6KRtgwhmWoHuwUH34XksnqW",
  "key23": "4JBJ9Cwgkby8dazLtAMCHP7roA9AzvEbEF7x5gpWARuzXM1xUyJLbW6w6ssMrzWxG2JeQrhipytj7b9cBy8cNbpC",
  "key24": "4iVo8o8KSDMq3uizj2FYN3XPHGCBotAnxFmrAMU9N4KrV8QvG444be7ZQYWYy7mZLCN1mkVYEHDPbNHNV44BfScV",
  "key25": "3zieeevmNDFiSKYzgrQ2AZVbdbb7kcc9MzU78gvbav4ZuGwBHBkLG88bNQPwB5BCN4jqLw18hSv2JsYV1NxqtksB",
  "key26": "2Ua9cN7yVFQ6Msuqj71mfKdTQeHPDD4oeMNxZgvoK67i9cC6ZEAhPethnJ3r4zCkN84g2SSH8CM1VSxikHNYt2sr",
  "key27": "3ab4o179oZLUAT2SjiGvNeGzddzKBXdVn6217mwrBLiv3jCgVYYYe94FR4LPSnPq9pTYc1nh93oQrAHkTdpp5BZM",
  "key28": "5mqJ8QNotFYbntjMeg9sB16EXnVLzsuA7PvYPM5MeaKMMLsoMRAQCP9QQ1z51EGD7zvhZ71FWa67KgNMiJ8nbSHn",
  "key29": "3PLUJ9UXVsQTqt9aVxP5UeoCK2HqatXMkQfKuqkgwHnVFjqAMsVWUFZSFz8cqprRb7zKyBcQY9fj4cC5ieC4p4Hy",
  "key30": "247kVCpveXAjqy4JwpdX8XuZKauL1AZfR5YGsy4M4ZNK45DU9SnefUKhJX6nLCxNPLnCVp6QpauE7ZLXV1nPsGB4",
  "key31": "437yMT85h7cZfUuWL7PoEhUsJVjrXciCxqLQbWERk3JQW6zBEYNer6xNmd3hQjB8xozhMThGmbuhbnayXeCPkZib",
  "key32": "5aRQnsGJ2tw6VyfU8HCJcM3TjKXfu5ncVdpttAxkZQrtZVsPqcLfpR6DRzmQkvgfKFWg46LerxQX8NUVMWEvUXAk",
  "key33": "61UUxDTeAzeqsuHqMGf7pTHAM9owDSU5ZPXJsdFvMFfkmpnnuLQrFSAMHR6rdEEhPb138YvzMr8oSXKC5FxSJ4qR",
  "key34": "bLhMWwrKmifhow5CDSj78KUrwtecgC4XNG5vxoxnbVn9RhVP2XuwgtjWejMneLjpvwBcjd9P4qAh871oXBP2eL7",
  "key35": "3S6oiKBQhqRcQSfGq42a84Zq8ueZeAFxEXpUiXKXgJVpGy1ZLUFxrMmFrovkaCCpNFTNqBoxKPDkQW3E6bXYVfeX",
  "key36": "5VkTKyiPfek6hPy2qFuxRpchWzwxqKZDa9Q6YRtgGoUf6znZkhfSNZSitHjTRaJUJ85cso8sdMk38KsDwavJeVbk",
  "key37": "2dYbaRTmq3JrJ1XkQJiaeNnjvFxSHgDtyuYf9JzWdT1wzxqLR6zygviWtemnRSNMzh6MSA7ACRVyFsdkDJE84RpV",
  "key38": "4dp5Ew4oCVQwMjH7j9EJ5HoLwgmpZ4Mz52EQiztpBrwBEizSFd1bAuHynUVnyQj2EvQcSJF4iwHnFme27mvmcooX",
  "key39": "sCpAF6ptuJjLCgTL2zGnRJAgZYtXUmAu2ETgtjZxt8iegkziWk8yLhsStjKQPTJkauXadD6Y8Meevhh6sitKQ2a",
  "key40": "3BBMgT1MnDuZxt54iKrmF9ZWmeizED6W4z4wY6R3NYVWTkQgRQGpThBhwuqfDcBh8EuwaJfpCBWbUokzHtjxhT2U",
  "key41": "4fSBNrSfbD87oLfJBDNqrg6H9DdUw9yC7Env6f8XQddfD8ntkfpm3FMQ6a6e6rvAFro6S8WsY961ratZrmjV61Th",
  "key42": "4BLDor1i5PJVtNbQi1tzXnHdG956NatYYqfXNhFybpq44ZiZHDLEQhW8ZXJ2UNoXidA2Gbn8BFjXTpL1VgG4z5kd",
  "key43": "DB9ewSLWTnppaHWrnMUE6z6joU5Kgr4vAnN9CQ8Ky2VCsAEgtCVpYm8GsauCXqEq6XUL7Tuk7cdXbf1mzrSDtyD",
  "key44": "4QuXFxVHBkwdPtNWkAUTu92ysoXVEW95Y3SbCBeddsNg5ZEK4PemAe1a8foRYUSTUcJDSgN5bckZwHVhQuELSFre"
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
