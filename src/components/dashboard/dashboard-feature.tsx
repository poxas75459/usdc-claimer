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
    "5hfW9pRfPd8SHfaWvYZUbEXn5MkFzu3zhbsEdNy6i9MkgcYtZ3ASEo3f51Z9z4E2T5FsFD4YFNz3DXniLvFtPLKX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FewPPpiAqvjjQ8VFgRHVR7hmhLNphp7pAxh6BYGFhbW59JqqCSYwJHaaYNvxTAhvbVjAFDxkP2fQHYXWmziP26c",
  "key1": "4voymMYUCDayLCeEXaWMdD2BWYd1wrxA5iHocuBchWikmjQCShdRxNY5aTiYUg8V7C38MUgo751geuQ1kq2931oK",
  "key2": "2o3sHPnkv5ABRZwCUGWPneAodFWyGAcmPHBbeGwCBNDUixVrrmRSAtLcAYUJD88KwjEFzCn2QN7j8XUkfNhSpBLW",
  "key3": "5nruPCyDQCHsfuvSzbNhAxnYfseMqzm9UUdRc9DXiywvLhiucPztTmXm1xDiKMwwrJvc8Z6pf6YAG1ot9SAWPNE9",
  "key4": "sMtgMCo7XGai99qMoLK5fUojEKXMyPcnupVXEdh84aW5hDLph8UCB2PqP5rx7Gv77wqS2MvrySEntr3S9dSpjqB",
  "key5": "352VRktWVr42FGBXg4JJw6HNz2SPWmWCYNS5NtKGYpb2gtnBsCbvQUqMUARrMLApNWCnyKcJmuiseUkTXya5FiW1",
  "key6": "2BbzFHhppw117F7QVvhwRWiq43WPh6KZLazFTMwWYm67ARJhKKTQJurXKo2zt6KXBXPKzeEfVcGJeZtCDDMVQd5q",
  "key7": "5HJuwWwosuiKD9utmgU22eM2vWW7GKhvT7vX6HMTC4PZJUfyLfBxZSAKNg9KrDVp3zYTEY8YqDwrhE2ukyJMiuYL",
  "key8": "3LsnaDk2D4aZr5a7AYUSoZJ6RDSzrcLLze8GryiS4PaXW1HR5dBcviBG1EXJp1s5NJwbAfk8teMyTebTzkkDMYRa",
  "key9": "392a6xAGaSRYxvThRYiTeBu1BNY8DbddV78yVGnX3vVm6CHFNfguihW3xZyQK4fKoLxi231Gh7t8qhBpeNX3bfKs",
  "key10": "5vv7PbXkGk3W4dj6WTQHbChoFNy17tR7Bn9qqz7FDgCcZGTfy6drD6zv32F5znm7jm38DRhgo276qqWeQtiMvAkk",
  "key11": "4oPnNFg68YSvpqi8EAgB2PcWRpdDQQbcA1dryyt5nbKBCXBJHEBJNfP9RWWjZvTbg8h7oTyYSCfqDmoS3hEkTS9f",
  "key12": "293hJokWPPEKUYs8anQhzW3mRqSoiFpwZJQ6mYKyZfxvguJS1yy21cmuwnFSokhEyu7yAtej6RDU6gsGG1Z3HhcC",
  "key13": "5wDTynTE5kadhRojanhETqneED3rRrHp3R3TZ97LmxCp7GfRd94wKXnEBU1rASRiFmr7PUr7xnR7awLLL4yGpVTC",
  "key14": "49YAfzRTS4oEaQPqReeUwAQTbyPUC8fJK2EWZsDDHMeAfa7YVRoXpreqg93GauLt1oFgbNMHxNv4ecdxbLxoSU2D",
  "key15": "33jmoCUVdZSxFpuN6fHyfz3ZsrcJzHee3YxQmJkU2jQSmB8t1h9PJQACDPtgbY66epEa4QCNaSQfjNwACNAVmjEA",
  "key16": "vp7o894sQrT4SLfH8gfCh4LbLioKR3cHes399HQzRRpEVDx88BgyKDwFq6SqqNvbBCpPZgj6SF4b9Q4h6t1iiJm",
  "key17": "2ptN8PXyYY8roQ8DMFJEkWCS7qamt6EwVfymv7Hn82uEsqjAp2YWdhgnUNTk4KGgu6frqM6UA3BTduU2wf6wHgZy",
  "key18": "5WzaVodoZQw6c2gBvbikBnak1hnKiBjWetivbX2cofbFzGotEFVtVRszEBw7mra3bNSLef3NPjiC6RwaNPq8oGxT",
  "key19": "2fvabvcmAaTArgYuKuRzKk2dWYefGTVVJumT8ywtDiMxswAunWV1j2nyjaxqPqtvzcVfssmXk9pSrRfjhZs7gtDE",
  "key20": "4b9SYWNuSXnsmP5bMqafWMSoEpHMFQhkzBR2LKbVzDxVRNkAFcgBQgJSMRGN8Qdpy5NobJD7wSP5qvNmpHwVaTuw",
  "key21": "Azek4ZZAZXFjKe8KeuYXHGAMDiYay8BGw2uXQfTMabZQUdmd6NiKtAYak7WwAVrB5SpaWfEKw2oUptG6hYq97i3",
  "key22": "5U9S2YojYc9yL8dcyXkNogKv8qQavkNw7PGXTQ2RVmZAbxzefRAjG1pfDK9yJTNX3PovWP9nTmUHqQKV9UYGazHN",
  "key23": "5tb2LbigARw4JtDYUVvmT6cE3AJ533N8JimyF2S7iWNnVokW67FKaNYwUYxWN5NTbPtZZ2X9CwYYCzpGJparDcfk",
  "key24": "2gdvWrca6Lq9NknGEqxzGM7Q1zr2PSR3wfiRXKCL97z7zb3HA2P39stEdFQGeBXxb7MgfnHCpkcxwb4vZj3yJU7K",
  "key25": "3p3x9CvWs5dgjiELaYguPsuJw1LCvmAfbYUmE2KVSLB19PXyAxiPJoMKCr81VpYSCS4VN7QuuNvjhn1coKx7H3xn",
  "key26": "4ftsaCKKuPXok6AnbbDNHwLXKpixHBXBMPG4gXkDE1nxmzAtG14K3EyePGVvg3ZsskCAB5kTmmPRsjmDyJ1u8s1o",
  "key27": "3dgwExsdAXukjTWHJx8ndrvfDYsZaFQNRY5L5zU96nAWCgbiM1KK7NTA6RaeTUHRzs4hdYTxpv1DYV9Vsmq5QVAB",
  "key28": "pBdJWNWRHu6S3FjwS6Vy7AnowrYbhJLJxBEiBWxbkTa6vdygjcDS2bA1HrNyVPLLpffYPSLU58usTTNWoLkQaM8",
  "key29": "5CfEHBCHEFnUdNaoKDYUZEeP7QzzkNMmPF35ojoJHJmDQXn5JCkrwZeZBPdsoHWn1YGC4s6K5mapQHSTBHXcnVui",
  "key30": "czFEwev1LX2mGGfCjYKuCxys2MA8CTK7HYC2jzfLme5Y992XBgexGuv39fAB7kisWXmeoXQQTAFPKH5ZJ4X41u3",
  "key31": "2NjUNE69BvAyToSakfUcvfNcbVSZ58DmAj9dMmnb5WipRA9DF6oyxJWsYjJXg2hFmhT9ndeMj3UPoyxSEyoS2hmf",
  "key32": "4mybNPQTEHSWHKi3Ddxueo5GP5rF4zQRDWHJhiL8eMhPCgwK5BusKYmdtWHBUccykewWgtabgBFSuprPs72ZA3DD",
  "key33": "3iVzLAfM6FX4Z7odPHhDsudeEkxYyBcS11MMALJ8TYZ84jmVjoH7T74KbrU89u7VTt3CpeNd31n5xcjMV8byPm46",
  "key34": "43mu96gJDjvawpAxP9KvbXgspcJfJaJPrCGnPPT5YZgX4Tghoi6GnWEGjnEM6EvQUeQHExs1zv8TaDVDmgvPvtYt",
  "key35": "rpn9obvzEzDvpttfsRzvaEa8pbvxjpvLccbbf67t88xq4MH7dLkkEV4fRvuZ9NBZeSSaU9MYs4ZfWmWbozYgMJD",
  "key36": "CZANyo91Lks6WMr5uPi739n984Zz9WeacSVNGy68Yt5Fh58yD7xoBNuk9FzZBmFAY4m6SCKjXmwpMJarLfpFvtT",
  "key37": "45K3Fty7nDxJSiBLKdohUjvpnaGM1VAGWbevSnjMpHNJUCEPpBXv1EvHLLZQhMxEaxXQ5dSbPmKwvnQ8gYZLQX3s",
  "key38": "2D8eEoqKwK7TiYVLm68mK7K62u2Q5E5cJeYsMqCUjERaaDsPTCs8auLhYQeazGEJYKevkXpieY67ViqZabneezkb",
  "key39": "pZhyfFDZ6F9kJakZgBmNKoXgqrVVcJHqocwCxQJG8TGTqQZqfwuUpLeFHKMsRNtxFiX5mncz64j58WGaz2QqivJ",
  "key40": "4BkQchKZqewsFWvPRw2tzrzp4TKdo414xnHL6Rd5tcZT8eg7ZtbHNbW3ziVyyQcdDpCWnQokvf49eybPuaxirzKG",
  "key41": "5gTTUxVdsyn5BjGT6CS3upfdq4E2Bbtmg5t3EKkzx4aGP9CnhRDKBhxrR9Yx1ihEv7YvTn4tJpX2q1pBdSzcH9r"
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
