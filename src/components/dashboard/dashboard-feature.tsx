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
    "2sLSTeZtxjBRNzV2t32pCfuRdPhi6sFe9xp7imAJxeGgdjXUKKK4YwpABaRV2jDeG86sno1REGuWdSgN4M9MtcA5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NX2qVnNMsVJ4GKAeF99BPmjQddujvt3tugHjYzzVBWeV528hFavs6NsXJhVYcjkBFYAMLc8pgsy9jgnvA2EjrEL",
  "key1": "2AaVAF9M5P5SKPyCCpoS6bRvff8inpQphqmttHYBULY533bahRUMoGyuhyzMPGaEHaYqxG7VJhko9G2RQrYtKHmL",
  "key2": "Q7VpbjXj2gxobRkg85uaSXmB3YVagZDavTAYEoccmsXoUFzjyeB2rNjRMytBr3vPzpnAdMbLGsGCDbX6NRQBDZU",
  "key3": "4mDiNsxV5FgFRBv9yiKTnJEW9phbh26Xa4zJuPW99JQs82c9N33T7wDmJGFbazv695MAV8om7njpmouJWybjnP3D",
  "key4": "62zS578ab191SQfMsPvNLjjQrhkrwdRFMd5zutrwxUUw4dbvzoPsBBdjmLMiQrEe5pcrVQFjXpXSqUqihgDFore3",
  "key5": "3QfA1RtqgkBQg9KksDyGCjZMqwY8HzTmmK2oWGeFSwGjNEdNTjR5v7bxxcXbmm4wmmeh8pbsvJrRgU3htJZ98Kkb",
  "key6": "3YTCvc12UuN288w27MdNegcDecvLHpr5NmKfZgTLCVgSciKoN4F9jsCmbx5iUFuusabmpXThZjEKfxDJx1aExBq2",
  "key7": "44FMye2Ku7ehGcyw1h7P2ru7T4mt4S1c3t7ob1AX5LzmUXNWxKU4Dja24AH8GfX1VQYbXy5M7FEJLbCNi3zSXoRb",
  "key8": "5JUXPn5RV4nqY9BT2UuMXNphZpD7BDGHtCi6ASoYHAfARrHhZrFBqnPDBUp3B1QN9UXdreT7Bo5Pnc4fsZ3ipDc",
  "key9": "2zDs1oEiqSHETpJm96eV3ymdQ62MKn1upwc7TKzQn5kMm2s63PECLoRaPi1fHD5upkYhmt5nQhpHW7Pu86sFNMo",
  "key10": "4d7SKGEDGWuUQCNALJvxkBQ66m8zr36BYJvjEqX17FQcaEd3ztLLLXRqSwgHraSb7pa4z12w2S13v1THkNyWgG6",
  "key11": "2edHxYBWYHwNB25CJXSZ3n4UAWGT8u7RLhLkWKn2bFCRTm3kDrtu1kAJHxDKUaVrKEdrhWoTtuzuEfGLKmv8DP7U",
  "key12": "3vYENHS9Xbf4Wzg4BohuCdoNUyug6QfnPWofmAkqk4nD5pnxxQ1GdPEK1qWoa8VPW17HiQBuRto78mk218tumbjN",
  "key13": "2KfyFoRsrszbfe5CHVV4MW3LrebSkq67gDoXqudPDZSMLdr38L8iykW1wsCyLrEKWxSYoiqFMp425Pzr1gVmkJeu",
  "key14": "c6f5wHBSKBJ66NZUEg57kguRqwaRDdRDCVKorMY9DvoEE3F7tWZjZZxMCNTLQuZE2xqek3hVJSNLvZN9XkDo94K",
  "key15": "h7E51Wvnv3rhmQbEENQkN3DCFzL27Wk4Ctki39bF8Dp3D1nwtnnTW8tdFBKCaTJipmmJ1JFLEQ4fc3Q9g78u5vs",
  "key16": "2vP19uFdCwPubu1yeYQWnfTyTNZWwEgkxA3Kuzt2kqHYUYxaFrUB73cCdDP89wPxFdJj2vW2oJxZHdftnCYycUxj",
  "key17": "s1uhGBKtMNae3tYhusKD83YogKwJ7qLgz6su6ET3o8Vc3gSirg8n26ATE35wpioNJttH8ZTrnZsTcq8MjnRQuLm",
  "key18": "5BLeEawuQeYQRWwHfdeER4WFYqGYom83swtuQBcX4quYZhnrBAMASBjUiuqAxxZX7qEgjSzX1j7BX8JZRoAY67oB",
  "key19": "WGrBSmXLiFiR4hhBePcNySUiRbEZcpR3d3gT46rbJ9xWJw9kQLx4o41sHZwhvMyEJrToqALurSbRA8CudtbrG6J",
  "key20": "3K62nhBQVDdD8nEWkeTajt7xK4T4oLbUSaYLbuia4od6U6jv9YpkbkWtRFCFWZDU7MoQxBjmUC8oDg5nLXJ6DKLw",
  "key21": "2jDvRBvxNQNiuvRLyiUDN4DoM1rCPKpTx5PBHnSPUSoHY7Ztvkpjjb7WYK2W6RfGRfePuLQmxrgYAnLjAASLnakP",
  "key22": "4ggXtam6VTGGQGPX9c1mESvCFhbFNUf5GZYaSD8U8hzn54wvU8Eahr6xXuFMBhJuzcfUzkQGkx4cBQvGMCacFmSt",
  "key23": "3gtmPFKSxhSjWVcviX3eMiiuHXxGBTqoRtkjKEg4CYHGzjwUHLqgZvnxZx3qwdrqY2yftUMwJKkKxDt5ebrh2Dx8",
  "key24": "5NDVDFFdLhYJQqtXyPHFSYEt2CSb5RkAz25DH2bttHaJ4mvbi9MeTBEXQTaLgn1LBH7e4JVg1KJRuREjnY24QMk9",
  "key25": "2bzqc9BnRXSyEsGEYL5s6CcaTveKMnmbrVrxAAeKS6aTDdzizR81Cnm8PRgNWoLfEM2Z3x5gB2QN8CQUDLvRZg8M",
  "key26": "2pMNkMyNuL3cviRUx5cASKLfQzDbcFxpngfVMUii2SMjvsphGQTzw8GBPbHXCWHZFDx3CX2B4LCBRUNmANxPt6qj",
  "key27": "4MYSgUnpJgZUkcPDrkux7ZfyVkV58Z7uF3ATqnRnxbJWMxtiHq7xPwUNXTSq4YNJyH25YTytF4ryedLCnKQpPVgS",
  "key28": "57QSaVN9BFkdHs8HjwJ2Sv854352ENM62tER4ySnGAmHc85tR9PDync63HJ3dbKbyeoFjQ83gZnV7TKGvD8jHQzY",
  "key29": "5kRV54bJ8odFwXFvUzp5zwC82EknPZ6SZznmmprXVoLiHd4eMENFy9ARXqMc4RX8i6izdEJUBfY46qttiyY46eV",
  "key30": "5Z4dtmPDbm3in1iZ8ufNKq5QCmwUkqvGDupucwZuJjePDHZeVpbweJ4NPaRtGpp1AnmvB1u5LLjeXccLa4AZ8BaB",
  "key31": "2rwYr1pgy7RSS2yyF3uqtHjgheZbSLQMgniu6EhSBK4RVXikKCz4286Tdj9qKhs5eMF5YUy5JHZgW3oa6x5qmv8",
  "key32": "3nSCfPkrFwXs5EVVRKaQjMccxt4rZGXMjhsgSs4aC7TswZV3eXSUbFwgJwhyeHyUfrPP9LZxbAFCae5yRRAN9nxo",
  "key33": "65WWgswrTRxyz6R3BRdeKbo8D7AVbURqL7hMcZWMKPPjVirq9Z7VhcobYZiLZZyvbAeSdJmAkXm4CsAdPjCDBtbQ",
  "key34": "4mRWTiyrhb3U1RVFNKMfsSYn1i4WW9vTHd3i98nTGVSLSJWsRG5ZiMuFac1nar8hJ5YfVLUT1VTHUqgS6ZoGKjVb",
  "key35": "NoyR2ULDsFEwxVZ4Baaq2Z1CQ8pR99DQBXXnJqhhNp7er2Yht5Ysc1aZticegrQNvyJ1ZPJym9W6X2eXcfJXyej",
  "key36": "2yYLHUyriWMm5vz7Vikdz76GVbHrfhumobtvHhPYp99xVNfV7ye5D1QSc8RxKNxBHpWUeJFnsW3n54Er8MNTHfGb",
  "key37": "dcratJihJMFM4yXfynTEirAdjmW3hXs5VaS3g18QGAFGGYjus2qoBpZUVLBvrkvrAttmA9MbGQdjJzr7ZjJE6cG",
  "key38": "naBvmoTh7Xv8KRT11coAi1WqdcWZTKxP1BpqufFMPY371j3j4MQeHrmxkBebMuDM4NdfzaLj8PwNeEAHowo6wN8",
  "key39": "4wdiJbBxehcBxc8BvW8FAWbYwZos35fJqF8Jc767bm5NDqhagZqZVuDTahQXc6zjNuph672bVesJhxaYzRHDLJZE",
  "key40": "3QwwhmjyrRQ4di2NqhcrUGFB7YY5BmhMM8dmcke5neAv44ALu5mKEAYEg9eyzfGLvwidXEBLv5QoDXBPzQAhrV4t",
  "key41": "PGfq89AsMwJ8nLaMYGFMAY7jgSk74rRXmsdGWfN5y2BpzWUZSV857QMDHdBrNmcV6e1XBtV7FxeerT4EABi8YFj",
  "key42": "2t6wzFpXPLPgiDZg9i5wY3YCikfrhVoYXEhjDzZqeRPq9TV3Tw1fFv5DAZkuVazYHkUsHsmAXXw2jhJLfFrhkeRc"
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
