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
    "5jwFo5c6sEQj89NFq4xMgjmpmyysaJGQ84mveKa7R8rHdaFayqEkiZhzpWcqLcFyUt8RneExvNXSK5APacLPqzR4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zuQ3Jb1ne2UuRMNFzjn3U7CePRRZQFW1aocP2PNGXoiYDBpkw2FRAYpC5Jz3MpJmxd26iCivEJNUCa6vK4X1nFE",
  "key1": "5gaMeWvyYqgvMaryjt95xkPXCCRavdjt6QdcPB92rDcgrYbhvqZ7BhQiUaoh9sMf1Nm8JSdLJTTvPmGAfedCEmMq",
  "key2": "4JjbGwB95C7ma7obVpQXv92okQ6Xaka8CQXHYLDabTKASA8HR1urYoagzPNiMDbVudHvgrZ5XRRsxPHGLhpyqHHS",
  "key3": "22vHzu7rCTrZVDh5MV1Kwb3NVB2AVYRjSWUPiWq81HmHRKeoEqzt5UabS2oZt8gcXSzi6jJzTNZQ2BGHuywANXsa",
  "key4": "3dsiB3EHsY6czieNd643tWjT5AU1VbGD4LVJ56HtTQspQG61fHhDGoXJicd9NpC8rKdspEDDFcuvmJ4JgkbZfsS7",
  "key5": "64i6km25bxAEqg3ULbcxCmYfoC7ZxiuZKT1ZetTMeydHTCyJWRDDE7jbmLqFDAyZyqGAZudHRsyQpS9E6WT3mjav",
  "key6": "WmPqekpQYm3roLSJM33LwdwkBGWxRYNAnx5ZDJ9cww4Hi9kyB4k5ay3aCnj2wosfqB4FtiyjR7KddavQBeaJAE2",
  "key7": "4cBam5iHSC4GQ1gVKBZtEpMHuHQP6DqEfYWJUWzUfFQvfZckDpdjnmmrSGobvUFgbTsTLp7RWgqpL2gFcS2neTsX",
  "key8": "3srf7xtEYC4oLNGiEpgnBezGMqdoiyn9bk8LXEnxZtaSybcaZzcyZkkF3rdFrocWsSniDW6v54iJK8om2H32asLy",
  "key9": "5iSvE2WmRQXAKD2xQD3AwDqE9BNGa9orWMVW2wPNXBPRxEw4CV2is73oRRzjrEkfeJDNncZTJmozSiftgF3m13xS",
  "key10": "4cNe6ZesVes3WPWrBo8RsL5ak5r7YvJcW1qeZ1MYV3TFPjbB9MXqpYCTetPgEMXPdLmWkZPdTRFn4rQwSpGbsc7a",
  "key11": "5dEhfbPxZH8jBFGgY5Fw81feUYcE376B5sjghCjwjKZ2EcTKj6DamPnfyUiqUwbRVgvYMvtDGSCQAudQyg5dP3aa",
  "key12": "65Lhf3LzTYwurUUR8zFB3PXCu81uKKY7F7ERGSQWYVraYzMSr3kLX2VPEqni7hTe6EMv2w2ffoPMLAtxYs3F732X",
  "key13": "3KhpF9zeEheZ5AW38uBzRPRiMzR4MRqgHwr1gyhpJMyAmSrENPNjCxkg5Bcx2xEi5j8VmXmoK51GmCNC4x31ggz3",
  "key14": "3WYrVET37eWw3cpt6JLdfqZyjnrJcc2ubrECpZgXE8QvfzEKVAf217QgrG8PK7DGDXhqU4FW1x3tom7iJHxexd6a",
  "key15": "36D48kBBpogUtWjfFZrtoGACfknwtshznoyLyQVXCYHaxiLbCLZ5dcmq4aAivW9PRMHNPEsPwtanxsJGAV1g5ALR",
  "key16": "635WtdAYt2JcEyMhTGiGQyyh8KeVMwe7S1sN8WTbYDoU4nb9C1V5VVFWbmmF7pST5tRT3SLfbesb6yc5eaANRnTX",
  "key17": "21RLTH5qX9JYqrpHQCb8RU5NX9Zy1iXAJrBmBWcGiTUf1nMECsXcXcm4yZ94zzMmbKiddS6vnKZWnPbZPUs1fyN3",
  "key18": "55Hhhg2qCbEuzBxjRMRbK5rrxgrMyQv6m2P8vvGDtUbJpAKCE77gXqgHMPonc7vAtg5d3tgqoN3LHoVhaM3q7Lho",
  "key19": "wSGsJiKMYo3ks1PDTzb9d7GdYV58e9Lj2NMkMsqiU7s76VEzvcStXyvowSiF3MRLdMWLspEVoGtLcjceXukEeLY",
  "key20": "2igsw6juMrfLx9hWRSf2ka5si8JgGHDi7iWumMWF1MESPAPusukrR6Epb3vBYNA9Px5FJ1GA5n8CRoT8mrLuNCU8",
  "key21": "3EGTkZJjVneqaBwAv4BLXUy3rRR4iLVivjnyxHXFYYex58vHbQdFnYwnGAVFaUuveFXY1gW3h9uj8Pqp3Tna8vWd",
  "key22": "2ir77z6fAZnPDnpJu413R7XAbKoJXLd6adttDGmzVk78J8BTQzo2TqeeQSEFHEvaouoxGhx1yPPXBb9jdQG418Ay",
  "key23": "42Af1479Mm93LH5NtjdosSWGMFTUAtZfhUDCPL2LqaF1hutg49j9rsdyHRitBXyBt39m4JFaV4vEdp7ZwNCHKxmx",
  "key24": "3E8kSisajxm65XcjGdF2v23dyRP5wgURNMRYEViN9HNWfa57SSTVtJ3vwDm6n5wjfqMcMdprGX6bQKqVLYXihaeq",
  "key25": "41j7MzHH3fV1zk3bxLtMCU1AhTitVA2qvSQ9DH1VZJfH4r7RteTWLUunp3Y74Uuj3PdwuVYje3QtUnHfQAXwCoo1",
  "key26": "x2v1v27SguE94j7Dr3zzCsAFXJe1AfLjnhDEKLwC2bcih4nAko38XUy8yvUhonfqVVxApeCT5gruuRSqZKB2F78",
  "key27": "5Ak2iZuu6CB7SoL7Y9397UtysNATHwAzKjckY2GPmUuNBNmDbhUXewcX9sp3NDa7FY35e5tCWph2rTkyKkcL9Uf4",
  "key28": "2qgk9J5FNRxMUxAjAMoiuxnxGcrBmKdS89WAxDnhYBmwFXTZBLfSg3P6iGH5jpF7RLDoAuLKknMRQBMG99qvusN2",
  "key29": "4UqyaAUy9hBXVzZrpNtaKymGck9Hmc2mDGTCPwvJnTsEeSUsgm5T9VxE7o1S726hDDS3F7PV7dDnvf5XAyVMwLn8",
  "key30": "irfRiqNB8uHwaeBeynE1zRahdu1ra8mvp9CHAMZRtwjJsSa9ysy54VjrvnRZLpnWxYXKoVX9fSnT7Y6rkVfc9QN",
  "key31": "2w8GLz6y65WLjskosJxDFyPN49ZinG7zYmLXEzFqojAacH8XsNCKR1QpsqF17KET1d4X2vHRaS9ChbYJz9QYy244",
  "key32": "PNAuW7hD8uQdKGqtDQCPZCywiyDx3FCKsDFG18ds5zC9rfi3e9NVJQpQHS8KXUDbxrjMhu67as27jx7sFWEYNaQ",
  "key33": "3PGcCrkXUwerhWmhDCDfgrUDVNtydoypX85fV79uoK4Rza7i1CMcLm4xN9L1uVkdCivzjUEcfrWr1Br97sEv7TS6",
  "key34": "59hw6K8s8J7xvQKBKZdQxzjB4N8UxbcBokq5si8muRQbLQTjqQf6N8C5phJzumoJ1i4g8wnrMyCMwGXmtJXLtapd",
  "key35": "5qcFcprsAFa1GdstpmCXchSX3pGKqeeXav6buYD1UwQd6WurXGiMFCUiNmGAnnufpmBWrJHidUtkGkmNJCXJZ4yQ",
  "key36": "2t3JEVT39nj6KQqtLeSnARKCjpJq8ZGTvqHPEkDU8FiyTq8vw1rWXr9oY5kQ5myxwGoA7skDWLFBHWeLyS2JZydK",
  "key37": "2SWgWMZFK1DBJgD4GEN8CKD7Ju73DxSnu2Lhwnn579Zg9Tg6ASS14wJ53GzrodAqbyqVpSqHVYDyHxa43MUZVQcL",
  "key38": "s2SH6HEY5q4w6sJiEaZ9L1k4spsd2xrtJ3qReALghd5EH1nyjLVcAHQMJ2NAb47qJaTbeSff15BCPxmQNCbhBN8",
  "key39": "CQTLTSGG4qtikNU1t3SBwSg8otasHLXiYQVgcQ4frMnVrgkQtNh2ncsgHD7irEKaZMD37ZXHvyw2UtdPxTbiqDB",
  "key40": "33LaENJVkfE5ZvXwWHXQyL8yW2SGU62QeinkbzPjRMp13npNb9TeJDHD1SoMjnhx24CgpEoCNSkfG9XoDXPrRGnD",
  "key41": "3hZVic7kyHwZxAzkZtZvDv1QRDb4XjkC6wmiUfb1A1UMTiuydWtb1qLnFW9Yo4QB85MVtBu9WNLSy1WcyK3VpPNL",
  "key42": "4Hm1VL45N95fGHeRrJpJqLcdXfgCWfLo3aj1CGeiU3N8nxahGFUisotobc8y3eXSDvAU9e6TmDazeDaCoCijVBrK",
  "key43": "65adNm2rG9cPm1Mt2ZyiXPBW7Qs4Dw3S7zZ9MDTccZeqVfj4TXDnr9VV56xzUv1zjRShvxAJqDG3DqH8vro39XFD",
  "key44": "4wwNfRA9JBFUVFbFkFyYXQ4ZUC4D7mc6BirjJJ7SH2e1sCfXhJ91jEvzgXwhG93GfmVEEUWCfGdRjBPnsbdcwkoA",
  "key45": "3LjPAMEGN7vXYnLDKUS6sQofc8F9KgJz4y57tRrw8Ry8NdpckLR9u8M1krpNB7xMNhzyLUZDunGmRvX9G2iV5Eor",
  "key46": "5VSUB41HnyU6DB1fUEW8hWTi4TYK3BXk7MThBQHBzXBxArgprwGaYrs63RkgnFMzvjy9s8TiGxCar1QAHSJ7BKRK",
  "key47": "5C3LuiU41ME6d9MCAiGhmjK1wi58XejU3Lyr4dgLGN8AFsr1rH6WMYVktqtQo3uHUfjGigmAYk3CV1iePssWf9kM"
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
