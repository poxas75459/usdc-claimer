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
    "LVH3PtMPAqemo91vsARE2kvZtq2R777PCQcLJkFt8RqtKu3rzmN6gXNNs6jzpCCNvybM2SNMHFsAFS7vo1DoaC2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Abhox2LPQLy9xdEKfyPEp9FkHyqXHWVipixYvfQ3k4qhQGbYGfqqfixvsUsZiPB1xayMa65LErZDM9DhHkumSKm",
  "key1": "2V9gaE5N5mmFTZ7Aiq6jEBAihk6MoCUHEEyvvLMn3eV6EqeFaDCfAwVxMWf1jQ6hYxTetaHsQcxTHmDYHx7gQLcu",
  "key2": "2Ar3jKHeZXxjb4ytE3sPmfLXSgLHAd1FHGwriT7EM8QTAADavHsP7xDfjN9pCmD6Ls2x78TTitozeQW2e5L4WQ7A",
  "key3": "2T88qV3GsqkFQX2rMBiV7Wna8BZjjf5xFWxRnpwVQYNArFLRAaYnxwZxas8JbKpWNhsQCsSAC3Bj7BVigjrQpCUx",
  "key4": "4XUk1oj54PGc4QxdgTJig5HY2ByMkUH9b6PM7F8AaNuYqJFeuuGNAGiJre1S78o7orGtuXv83xX3YfmRmujt2xxg",
  "key5": "5HcvUvg5YNGrb7doT2qWLpaLRUfKBDFyAq3D29JmKXnPS831JbdmezAtfykCfZAySvW2BCBuB58nSWJUeRYUs6D8",
  "key6": "3mssGiP3HdFenQ6oSjBx8iebEysmJ2Vhf8tecFJUMk6TsoGuoyYXWTLbdRwwNFfZVURysCDnoourKX1hF4Pyzgb6",
  "key7": "Bpsn4JjCF9dGNzTQArPbbeR1NiGP9diQRt1goCz4uaNbfufaWYnfDq49pr5Z4eRRxnSZNdPhrvuKAzEU3ufa8zQ",
  "key8": "368aX1TiKanADaWc78oUgbYtU1t7j4SyyHrh2Pm21msnV4stjKp6LfBXMtLfT7kV4N6sKXieDS7LzK8u6N4eyGUP",
  "key9": "281Y2Xs1HVuh6Su74MG3qizAcZmVfHGhCB2hnp4PMM3j79fpoRG4jKeMbF7kew1oXfDoEJMU6Q8censCKtjb5yWz",
  "key10": "CHey1F8B9cCDnEbUatYWC2W3Z1o2MS7QfA5ndPEzGjctKxgFbwbNPXnU3RPmP4uJychhgUpmqdT33Vp9sdw5PFu",
  "key11": "QtpUdKjVK1cbWHsAwi2aq6HYBykLpWzsAq4YzuoR2GHfxN94HNgXm1UE6ovqfCwTDgThg9hcfdHvUL1g2tGhaFN",
  "key12": "NjivPnmxRULU1hFpr17jvkMHFsc2MmPiynVRiNRsoA1MKbREuGBtzNquj3oqVfztkQHJvtKBPXT6wus1tMn3Vt9",
  "key13": "5FzRLnZ6wnFargkSvYFkG9JADXhKmKFkz4HKhE9RM17CsKvw5bMhopxdrv72VMtdTv7Ys9RHEkErrGqPrzCdV66J",
  "key14": "VM8PbPWUgyihD8oL4Ju4wjeEcTb1GbmbJcGMY8nJjKUu1Tz1XDUpWHcMoLRVVHCU8J6D1kmc74radMs82mVv7hM",
  "key15": "36tjpmdS7egvXPAjp3JqCYacZ3eVhU4tKN1KNhdWBddsPNBAq1VNSY8jhENf82MgjxN9Tfpd3qAsPFei27i5CSnE",
  "key16": "3sj3ZWwPBGf2KUvxgpvzeyRW4MYQrEYd9FSSQDfYAaFjzthrVybnnfeyQpPZD4DxD9NrUL8SKZmMCjFETa2BnZfq",
  "key17": "2V2FYnW8vWgqh7jqz3o85MnB5hs9Ptpuue52gxkqVv36XeYzH54kfaT2ZCEtdbYASP1sau9DdGxLjiMrgPobs1im",
  "key18": "M1pGgs5ZqpLLeiFswm9AAJ3RXW3CrTPs9tMSpo3DEWeNc14vPTTLYPfypGyGkHBpLAFRvspdSFpQ8RGhjaTAHCh",
  "key19": "2nb4zyddJDycQnsHazfBc45oM39xhtKYWSy4wnWjhvG7Dhw6fbK5vWX5yAnnrTZptZ6Waauimb4EdAn1jAmnDQ7t",
  "key20": "59Tm5HBGszY4G9ryqFLXe884v6FP4cRsf6LGw4HK9jnLS8uQHero1gbjXwawX37FS4vZHkc7Y9hY2FHRkSfQzvaw",
  "key21": "4m568V1EjyriWnXNwPeJmLUTvAjJCYDRctymdnKu6oWp1CYLKabM1Vui2HdmB6WrN9hLnERkLi7Gh9TXCPsGWs6o",
  "key22": "66zt2nsPV6KMcy9ujvXM45j5n4GNfngUVenjQgRwVM5HbJGuhaeVC2LTA1pHRYJ7LCETLEux5Sd3Copi5SB29wb3",
  "key23": "2PYK1rS9edxhU4NECW65uq14U1FaZYrMzvSodYj3Vq4zjrnQ9vzvzrt6ir1QBWqvEszDf8cUU4wgRCooW8h934f5",
  "key24": "5NBJMRBsRu8AKprbj6z2ax5vKzLbykpxYbkaj2udDgxRJf1Df59K1V6Rq21Mod7M7t1SFDY2hgXT56GzGcnURxoo",
  "key25": "4J1TVVS6c4i3BpQ9cFkuKiEgkRo2o46gTBKEbYNM35Nz8EgCoTufzZnNsA3kV4rwmrkJXLngZQ5ssydfBjbK4WPp",
  "key26": "3Lfyur1jQtZ67gQAsSiMiAVLzkFD9Kea3JGU2vXdz7sSRRmoVND2FRecYwCwxwHeKLJYkD96m82e6RQpfv8paLqh",
  "key27": "2r1u8MQTaMsAFMsuDoVm1DtcNfZw2aqJPMrJ6cktQw7fYh4GknPNSNBkrZcQkkwmcnKCqn8tUc3EhYP8mrDfzyn1",
  "key28": "5r4BdfEknBs8gdJ7k8jHyUQK7VSo5N4Boi4NBBuWQMSKqQMbnPMCUVrUjtBgBpMgJL76KPZKQ6EnwaGfw1Evvhn8",
  "key29": "4hAioxftwuH8Sp7g55PcZ56LocE1XLg3ECkxUqqQMywHPf3Fh1my8jBoE3xdtfWLLmQ7dmgfJ9YL5RZ5rpH3jdUP",
  "key30": "5PzukE8KTYQ5btd6NzbgguQjCLmgin57oVZNYkSY3z4KwaDJkRbHogAuYgpdJnYNR3qC22NCLbsR6XAgbRwYsBGS",
  "key31": "2N8LcQoDf8VhFm437U46RALrzY5QX4akEE7Jhrg8NbLYYqLYArkKD6SEDvpwW4i7VefnXV65WHgTXQHiYNa3Uexj",
  "key32": "2KprwojcMAy7TTjLdQyDcxk4N2BoLXswbpQ7Av6ys85NSL24ACcwNAwpc2hD1SyWFxLEvon8Wix3zZuu64sUGH5o",
  "key33": "4R5uAxDye2nQVY97w6KekARD2v9GZGx57hBtB4hjRBTNRfbBaYj6L1BkA7oCKR5EZvzy5wpnDUhVsrt7QXruNmpC",
  "key34": "2ScQihePHVCfak1ryD4jQMKqeegtnNAcrhcJqkEvqZx3tvSMUZzsmnLv3EuDdbk3YAvAz22YScUT8cRxhZ3HhZJ4",
  "key35": "Ht1T9d5oUmQiAYJD1GipW2ddJzXspXbhYAKA3onkcmPbZZHRKJqgfHMxqpYZizhfhfv6K3BcjevjVPXDJMag1KJ",
  "key36": "4srCWNaG8tPeRqfRueRqhpcbr7kqwMqhudYANb6fC2WY71kzfeNsZuw74F499b3UP3cM7QPYN4eKvFTdmMQUWiF6",
  "key37": "2gaN6qrc2GLuowwsrywYMtmbsuNGwEPtsh7VDGnVCBcbNCWSb9MuApRrkoDrRymMbM4G3oWkcUT5X7ABmb66zvLX",
  "key38": "5BjhdZXPhU5P2TfWMWM9eGwVodSBbUJCmqrrejuahVDZQscGRLuaX5rUecXqdykWDQ14Y7TG1Ay8UbWDi42qzxtG",
  "key39": "4EWapmWiKseTe52BVCewzsZ5ptqQz98SRpf4RcHoHxh8eC5nhq3dcFbwfG6k84oTyY76ygedWDn8pVBH2uu6v9sM",
  "key40": "2UWXnyfFMzXDv7G946hG5JYW5Gp4bSLfwFZ78C1HKVYaHwviq3NqJBagptiSHkukvrRtX2ruMj4aVbXjY9tPyf6w"
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
