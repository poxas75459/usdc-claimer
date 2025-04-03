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
    "3m8oNwYUePpEnSfGb1zUPoQM5hfLWLrgPFvf7aiknxB4pJ4KNgr7PWzapFEEtzbJcRS15iCPzQKhYbLB2QSa2VyM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64oVST5SccD1sxpvBXKKqKzJ5wMonu955joRka1NE2x2cBPLsw1gsaNoK79cKUi7YKuzbcCTV8pjjDWYxEeMLy6c",
  "key1": "3GYZCCHLcV7A1k22T8uGqNFZLGknaNiLzyieMh3NdT97WCBGY71AcxzWoFKwmaDDhzP7V26j6WnYo7xH9z8nLUoi",
  "key2": "5N9afN1gNsmFmSRSnJi2pMrEdCbRet9gSr4sV36A8ig6RgMvyte62Y8SasFKFAM9X2qBchrAgo38ZpVJux5pLd1Z",
  "key3": "7wxCYFTrJPVyP8ssh5UXspn5Wgc6BVTrDgP4u2Jus4BXA3rmodd8cENxgzsCGEXKp46gjKSYEwh3mBxH7PQSuB4",
  "key4": "5LXvDkbjrVUafbdMuXdQN3eLDSMyyvJtWDzuC86tNy82FkYyUEbuaWoVhPEscwB7pQNQMD2PLn9d3xgf4SdAtVsM",
  "key5": "3U2UgnBkGVtuzCqi4cZctKo9D5TWLEasd1Q5wQRnxVRFVMFW8ZjtcBFpqMEDoA79iCAwGrpXkow1osBRPbWH97LS",
  "key6": "4wVPLrNznys9WYYnYNcVartf1hz6QY8LUFEcaW4QRKVnXXFeLDH57QBKZoegdAKebyDoA8GNiaeKXnTL5C8KiwRN",
  "key7": "c4Ysh2oDeHecRyMz4NfZpjAVakw1CfnPpj8944R1stQhTR8QDnRJRXrbTB63SohceoTSuaRxzwH6HX9PWp8jzck",
  "key8": "63Det51XJXJk7eTbWyunGL3NNAD24B3jsSx514s6KiXeAx5zNF76rRTXs1NCqNxwZnkvy9VReSaMnaFNfMR67x3E",
  "key9": "3up6Av9tYkcxCy1WCqdGxwoZvcLH8XHxcwKw6AEYVpsbPDmc8Ba1MNHNjP2Cmgwk2KgoGJEBypKFPyTsTbsdq66d",
  "key10": "2z15zbqR7UZYQ9xrqQPs6xGoV3cnuBJNTVN1wcnvqYiC9GEYHJz3t9j1Tmi6aoBtGXWBtwW6c1cgVQcNC4p8UDpW",
  "key11": "dEryXpDpTbKGeSUtXAMinuW58Eaqcsx8NqYNUvtU2QLU2rCqhrDRpvTeL75bqUWCPitZjztQKicq6XP6BCfSYAa",
  "key12": "4CsN9bixgs2auS5ytEEsviRgLtWTB4cLnzbY3tiRAEFWxBnrSjDtJbFuhLs7oXFu3GngJQW9W12xbhnxiphqds3o",
  "key13": "kt6MbUrEbxmCvegG855Jea5J9x5MdQ4tLEYuUCYNov6jMiBDcgD7nVnazdLML2Djv9Jp9yLp5NJiv3KWCXN4Tsp",
  "key14": "3zFHUeFwH8nLHfPutYYfkRyfjUNoMHM3q9BrYskZbH3PysKKs4RDSRFmEhUvgZSbgUPPiWhjdG8CtDXNKXrMUmMu",
  "key15": "3hmK8PGSD5X78HndLReowwpAUh2rrHCFmMWaPCuQrW2smuNeexhSroz9EaAHQLbQndYE7EzzkRhRjm8cUPvDhcyL",
  "key16": "55FpbSmTdiytkcuqDX3aXcLTWDPisKxaAcNKDt1dkucNbAZQQcNDFFLEu6PKuWM961J55dkkB9KNoQeFR2Y6KTza",
  "key17": "3uDgn1rEe45ttvq4sEtvyhzLqzdFg3JkxuKE8ofwsuxfe6tcwg19ey8UDdUeK89dUayXNi2WVtPgpB4FCTDnvWc3",
  "key18": "55a5goXdffRs5dcM6Wuv1cSUpShvU4qWJWXpnf3FpW8z7sNZrQaYGkrDdfkbt8mxgKzqkBrW9srdGeqeGZtWgc6b",
  "key19": "4VsQN2zAAtNjsSDvH1F9AqPNXp6g5LLRDtqBQDv6HcEyVP51bx6vENweXC4BncZ6KoPQq6Nuyv81D4yyXVUyjBay",
  "key20": "REd8egJRAP6zSZfXHoheWdx4MrEXegPKx29yYEZGv2PTUJMD3cg1HQ7HpAfjaATkr1xApGQfCEEBNMSzpgig1LA",
  "key21": "62gwFter7bbr9xvzLv63ZBYsLHQReyHhUmLei4XmzRYjx1Q8eteVaZh9Hmz75bQbMqo3dzjJHzxtct3FRztFV19S",
  "key22": "2gmpnaGcc6x6H5AAnCpX7w5GitcdLkM5ri4s75Z8LViG4gw1BU8mdPshA6yZPfhFWrJ6eZp4EFpjPgP4KJoWTLCG",
  "key23": "4fEDM15ZWhexmEKuLoG95Lop4NLqpdxL9fvubZ9H7Rn4aGqMY43xuU9GB3Jq9nkZjMZmv1tYMFNF2zNveTz2p8mv",
  "key24": "5UiUCdBUJjqPybAAbKtaC6xxB5P8baqqbFQGdU4ydVmbiLuKunVo6WKD7m8n3k3CJqCeiz5dtw7xCvcx9ERiesRm",
  "key25": "3QEU8WzJTWafAdimTYmfYwwjPBjMfkcJo9PD7EHXb1ySo1cCU5PakBj9UYho9VTrwgxpurFwdHYTVuc5zU7S21zW",
  "key26": "2sH79xk7WcaMDhGJUejj8exJ2F3j6ZqdgoQENWXS22nhsuHadJxxppVDcea4BTUcxRRMGfJvq17ztRW6wyW6Q8hu",
  "key27": "VPQQvdGjxdajb3STsZGi6KKttiSCDpKamKKcQ8EXYpos2VRF3FjSweqXRmdZRpKjJYjR9bm34Pc5nAczimodgSU",
  "key28": "2GBC4g3289BneLG4ZcMPvxXzEoG8FHNaM8BgijygakNjPxaJcqLU1hyvF8wXpxbCEhFJFgPjNB8hWP28K8aCVH56",
  "key29": "3ActUNU2Kxf79z8C3HTEHas6A7JTt7ab3Vxx5RhTdCcn6pKDaA9n31XCj4AFTwfx6jnF3vyM1B9LRnJHGQMMRf3R",
  "key30": "6vZE5UJYcL6Lo6JZqDrKuLQQRhjXJBymqZiS13N3ovPXhqLJnXUCwqKBi34xkBFkBr8dyaJTNagj9kc9RR3KLTL",
  "key31": "335Rcb2R5eRqDDB9dmW7czdV1AcfKabNqrcbQMNJNs5SYcpn45P6JR39d7jki7dUGB5CAqj3n59qsm9jCgXcpQSa",
  "key32": "2CkSV61muvvNJN672NJBk9JWn9ad5W4sEas9akQHhjX12ku5NrU57skR4fsVRAZMcomwMVQe4WDgNRbvgJEHcQoJ",
  "key33": "3tUJBUZjssdFbbZQywCyjH4G3dTXXbGcSCB5d53zYump83wwhPWZFNLqNVR6qf7sgHMey7ToGREdtdS2j9c1dwur",
  "key34": "5jxnChr16gnRkeUc75nAU2S5dw7fRJYk99N2ousV6szcyL55GmPJ41s4VV4zzE3pte3kaQrzCWxAK3xBeNXpvpBN",
  "key35": "DWrRuLRaudsS9TZd5PXpAUGawxKFdiDwBTpsXbqUmJ7KN4fpgbZkWqTLjyyamdzCaTfhsYRY3vhVRTPtcUSKuLq",
  "key36": "38Unp3scbAL24MdMCW4zAaotLFL9Cb8JbyV3oje989dVXoEATKbGcKcqXU3XoLty9kQCy759oGj7TVdQBMiXWf12",
  "key37": "2JSoV67NkEgSSGcdDmZbEpB1xSFEQZmm3ZSnsLzjeFUnBurTz2ESAwDbHZoGHsuuQdgQpMxDuEVnyaa8v1VZrEcJ",
  "key38": "2SLkAn4mrkDct2PddkxhFpvAHi1D8DtGK1VPvHhehkZKiaFxLk6uTTo8y2urWycFUPXUSKu3DFQGXo1vrcA6TAht",
  "key39": "5BuzaWg3YG16GXfzTPUjAnnfz94rwNe6ku3CdPJkvLJbKfsYxZiqpUMEDtFXDettD4ePVu53nWwPdp3EFsNUcdbL",
  "key40": "2VipFXfGqsLbqZ8WjwL5PDbuZZCr8rTgApeQcCao29THb4zRBbq9EAy6Y8rLpASw8zaT2fY77umhdNAP59bEFPrZ"
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
