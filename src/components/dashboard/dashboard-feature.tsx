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
    "4MoJeftVy9sY5sthhANe7epAzuWm1G8qycijarSzUriesa89gju1gk6Py9Hmy4sH1rnJXWNo5NYjcKxZGZcDNrzx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A1w4rik7t86dq93Ecqo7xCehk6bveWWN1R69JYGugcCktxaStYRUVR56J4bVmFac8xbNRkHPhcDsPwdiGVGev3M",
  "key1": "4VDZjWs4piJUKK5MrzhNGhZN5aoUznmed1rM7FwyaaSrZfcy1VJLn1HBCRzU8ugBwEB4u3YPkPqGs2s665t8RUso",
  "key2": "278LKg3kb2fQbovrmiK8sH5bD62kcJFnEZKMb619XRCBNp4wmsQquAiGx82FNY8SdnULs2C2fFbq1zPHz9nCxpkL",
  "key3": "5qkQP2JwAUtLTwpgjQXvG1EAJCkxxmSN4tdKSMpwKNphDL25tQ1xbCpyVed67ftuJQaF8vtmCB9nk8hJm9AZJv5Z",
  "key4": "3fPV41qrMgDy9QUFXaZEHRUkViMSTimbHH12S75JVgpqtfcmprgEP1tKQEgsm2VBqSdBa8NZG8Xo4DF51RGnSE6z",
  "key5": "32U6CfAVcXHfji62MymtojkveZBmEvAdc6g69m7XbwaVrWkj7ta1SFCuhVSXLVysoLpADGFzuoP3CbP2odADYaRr",
  "key6": "4AwFFf2fPWDvxK87LrVJP6xjFcDyxRWCmSKJ1wTNfLxKUQDBaTfop847cbgiHaCsJr9VLsABmFVf9JcoPRAnXk7K",
  "key7": "Gk66T4a8Ayv1Dh6R1J7CfpqjUCuvyWQAcxCNNtQyx3eT6Dyw8nsf7fHBfSFy1t2HdSYV57VnGJEdEwLFuGUaCWy",
  "key8": "2qyUAYLeDtCjrjreZzcFBuHKWFZvC3wMTszjM1yxNqfunGsVXX4GB5jqqRcYvTq4PsxyNK6fA1TFJsHN1WS5yGTe",
  "key9": "4e9UutCBSEafmSPj8mn7THCYBAC4gV8Rp7cttBJ1p3cfrJcqtp1KgcwpTGkTuLjbdf2G6Bu1sED2NovWixCJKhE1",
  "key10": "4rsfnk2XGYd6rDC9v6sU7xrAnBUE6UYDxLGbCPgs7PDFFTJCuFzKaonhM4MZk5EZ1MzxRM1ACwYbm7RzAAyKbPmC",
  "key11": "22dtrfdoXzJLWRGjLYc5m1esw6Vk4LbcCTTu4eptN4btQzn9GCwL57uwWGNLLzWfJ87U4M5oA1Fc4fiubqCbXhbZ",
  "key12": "2BmK5FHCV6kMkSffKzAG5ne5XHvUQjsxLbVhmypWAkJvoqmTMHF9UE2qXSNetkmXpevkBvPyfw8qWVyTZeszYFgn",
  "key13": "3G8Qt513Yum1G1Kvy2ikzqsCzv34cpmPpL8pq4czTFZG7Lfa9bAgrpsXDaB7yrmQgCCFt2wLkznLZD1ioyDrCJtC",
  "key14": "4LtHsFanZejTLfLuEjR7CGcBLarANL1BZeJj5BLAVoQv86z1Y2fQFzMRgYJXs1Az2mA7jd5mfsf1UynXc9vvQimo",
  "key15": "5KFfFkJi9zQnAPvWJHEALGoBTdcmReybNXCE6zf1WUdJss929QeBgkHYkcPNYXgc8weKWFTauKqv2LVZoZmYdGLb",
  "key16": "Q1fcZr1p9phdb6TJRTMsE61TNza1DhDXcREoJt96qBG2mLFLVCLgrFHbbVhqbq4xpNH6L6DF38iG9Aa1r8ewRRy",
  "key17": "2Zm8KRzPMzEtrSNcLoStxAgBhP9Hr1o86A2Z9nNyT6HbBBeYfMpF914BxW1oW6GgBruUp67ypyfTG1jNJuPYF15p",
  "key18": "3mURnjTRyh48nBMBRhqEtETHQgQyLWBSEiDueCZidxzZdCjY8k9Ek1jDn1aKYSobdUGK6v29oa1HcSEVKyaZat3B",
  "key19": "4FLUmKhoxTNd3BpvYKcv64MVoZuzHM56FT42B4vJ26b4j4bAWxUaGGRwBpyqSL3JAThK9FzvzXPJqcKBxZA8Had8",
  "key20": "5Wey7KVGfPuLrMgiPoWnuDQx8gFdhTGBeUx59zcKUp3vubjLzdekSiVkkZ2TgtL5mxN8z5Rop6HdBcrv8MtRYC9v",
  "key21": "4Pm6kJ96YWZ83bZ1c28tn97ekBKtkYubHh6npKqkcW7LYmxxs8biNat75uJNKzaVVw7GHMHq4dFYwpr2VpKUP8L1",
  "key22": "5imawC4u7CYjuZB7M6d9rmXe6D9ZkeZewJjCY4Wa2PBb8QJ57Gurq2qVbY3qUfxdLC54HfoUZsNt7z4Cy9wdfiWy",
  "key23": "53hPcFLbjJSJXvq8AFWphAnvL9qr2xv5teHBYXsmTWJKaDev5EQ8WayXkNzJWtGHeLt8ucShf8P6yMMikiWiFj9m",
  "key24": "pTPw8uaoe1fPL5E15Y4XFwf4wVpLGCV9JETG5G5H8RUBVjaHpsnYxJa1taQULV5WLsimeC4S6boJz149WUT92iv",
  "key25": "vnvFJZB1XVnCXuvMnC5onoemVyrfrHR8tjYqWJuC3ntaVgBJVu7hw9VrauFo11xBwqKvaDcJLaVfyodAPvLLtdZ",
  "key26": "4jg1okFGxrqo4FxfVPuBXwqcErS4n3zcQgU4s5SKP5iWSVn4Xck98Xi6biWZkRXJE6DWDTRQdwHAcL74pLXAJ2q3",
  "key27": "7DwhMuv56kAv986Hw7zBDsh8BcQgdpqCdMbUTxcADTJ8E5kHnbLnvNTHPnhkUUE7jTAu6Sh2HBcpvAXvtt7sGEQ",
  "key28": "3WUAkh4CH3gVZZMMp6WYCCVgWYJruWKja6AxchoyH6hspNKpqwrjcsGk53NaTFME3BSrAyNhN5gVnej3rxgQRXcD",
  "key29": "21JvuMeoPhhXw8E6u46bPAajAe9L5vw73AbevF3jgkypMnCQQh4eUVFTDVobBu933FQtTYocCQvyDxfQNX6V8BEG",
  "key30": "52FxQn7AZHDaAPfsFNUr5azykCDaKshnwKetJS8eF3nkheVjTorXq7Ao8tEEK82aKnomS99SH7hMewCzBZm5HBug",
  "key31": "31VaB9iHLH4nx3mPvpkJuezEvxNLqzw8qy9oqcqtxDwJL3w9nQYP1GJWgTYCWXK21fhSiKxm6vm97pMtrZT1D7bC",
  "key32": "57aZKpZPsnHVteawuqoeBBfpyvWUp18J8CXN4QRAKNwY3iSS967zgMNCfmr2d5B1cVvJyrE47jLPxYhnxKEfCFwn",
  "key33": "3q29Gt5G68Hbc3AP66VwPskzt9adDBDt9NfBy811a85WGMbMubBy15UjQrUUA7Uv2iwJAhYxKJx6HCdGEjwwkmtS"
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
