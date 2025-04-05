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
    "gdnGsWWC1n48x5M2CmFgRtqxyXv1LK2ZfytxZfrSZghEq1QezAdGYHnWbozEyuyQcF7q9zNP6r4HySTLEYosMkQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57L8wvgXxmZBbFzNz8bqWan4jjqbw2cFE4VX7qCSsimuh9xKFWmgbh9eANGNxX68uBTWDjxZmQXpgZHLhW65LSKX",
  "key1": "nzvKC2hTVRAUG9mpKUiJwAXWu7VHPatSRd23UsPdUWAs4hiMhkhaewPESvLi2F49TSKrDy7dR8ztu6Dh68JYQdG",
  "key2": "5vNcPqCYFTurcgCmN2PrVFXgg61zkccMiRcjC58wDWqCWX5q95pQWTVDFv3TFgR5ssxkXrM8ZdcysMPyX4hg6CZp",
  "key3": "4nbum7tRjv17iTQZUtJHTvAj1u8P78Ns2xiXaM48Cn2HPKPcQqqbrzTCaZLY8dQPHZZicK9AaWGPKLF5fZMC6xwC",
  "key4": "uRaJgCjnXsm2aD8i41BKJvaSZWSmH71CU7FrcjWDXBS4YkAwmR86PVprDL5cYNakGwEDYBXwCj43bJxpBP8EJnH",
  "key5": "3V5Whyp2aU1cec5YBE5JaoU4UjL3BrGKyxWpMbSEwJ52WmLLBerwmbbVqQJZfTm1kQugsSpBSGZWVe8SyuMaHefz",
  "key6": "4ghmY3wsVWTUQ8UCxMh9jzSQNmxmo1M5oDkxcaSDV97jeSH69sedmv3CtSxzi7Jm4dVfr5aCrxJWtFqabXcPZYes",
  "key7": "hUyP9jvxWSMgK97yB16gwJkYFHG39wS7xr6Wd2bjy7Gk6GAGwdz29otG29E3F543Zy7UchiyQS7fyArZMUBghBb",
  "key8": "4XrcAPKtg3q3JQeaWSfoJDLNWG2UWhidhL5ZtKXVM3vH98q2LAtXaM7hoGP6ddQzcApvp5pU9aiJHPyBheyQJNj5",
  "key9": "5YUXq9tWRa75HTazMNQNx4fUvRUcXCrt6ohWLhZXUW1dg9CHpXFQovK3XQivEmUUDJPEvkx7dCBGbLYJe3A5MUWd",
  "key10": "4yrujVF8TwEMVoDN8dbr4pPfSc8ePWSxFY8BQLvGQhCV4Ex49nVuh9wCDWZDYTbuweZQ6zQHMSjucmjv677Zj4oi",
  "key11": "5f2q497mdPYRyRq6NRVyg8whquADpF742ngug2Snsj71KoFj9wzBxj3ai45o4b8fy1mZZVhJNNwdDRGHbZ1Mu1w9",
  "key12": "2rGebqfrjF72KtRUahUEQJCRM89mpwwt8VQUQLNW1s4qVyLTDC3u3aP2kQFgBa9PjpzjXpnuo4b7RSsXPFx4N2YS",
  "key13": "5H1yx9FrozKYYyNYgzmiUtdo4fN1UfVJjBhzEnP1Ghn9KS47VNCbFUwyiRNFxd3ST9fvTQh2iaJcDh3DcSDWQDed",
  "key14": "26aLgWkM69vUVGjG4kvMvjiLpzmaLummWxcSPw9V4aRmSY4HWbmXgFYqJG5Np3vWiUTjTkHJ913rytH2fykbnMTj",
  "key15": "Y7jS8AHyrHLBBCn1CdBNDF1GzgHRr3kCiTfhGfzUCsJuZ1gFQ7W5vDdGSesogXaB9ujQPpyu4VKEtPuvRhjZWN5",
  "key16": "3nt43H99xdC6QfTdoYzkEHiBmtaQjJeQ5Va2A5cWxLUFe245snFZiidncSXPK9Y2AmNN3sEWD2K1er4TAeapQBJn",
  "key17": "5kj9htUT1no7EqBxuJsjzJ5jYjTMaJb7D42BAkVuZBU7rjMetmPnxU2macLuc2yWwW2qAjCaqCLSAE2sHk2d5mr6",
  "key18": "4hrZxHgCbHsrbRYSXM56XLFvToYwmJWiD6z2mCew4fNcasHVEfzZpnTRnS4B32A9BHfqmg2hkRBnzxaswo35Ruip",
  "key19": "cSGCuNu1besCt37gN7iozsRdfujXVgJpvx59KYM4mmd53pKYwV2Z39XCuYngQLtrR5BN6RWMpMBfGUEZjk9aLbT",
  "key20": "4dLTZriJse4nGsY3UUAWuENK8bfxLH5GqNxGV8jUuRvLMcbgCFpWf7pkSKx8XVPXckubyM5QEcZzew5UK7WR7HTF",
  "key21": "2nUbkiTpxCyr9KyFTEQbTVEhz4dDh6byseEANu1XnjRBChzaeXvWvdTfRZDRJiMnvqFxLro5ufamGa6JTE67XA2h",
  "key22": "3FTB2WYGgb5MkC7ds3ECDyG4GBDhmxUU4pdH9sWa1ytEfVPUawuq1SRavwBWbs1AvjR1qNGoZZe3cvwpRc4c3yXj",
  "key23": "PSeZuM74oFKTEQTrXwUvUHraEoVDM8rEzsLYUrBYPJdeLXG7szGjeowJuAtgEaG3qZ58M1nDWGQ4Yn8LTCQpxxV",
  "key24": "4GieZhxzL7Pd584RcK6tKwHtxXLNvzGMYf2XCVNC5ReXLi94BLZsJR17Cp3TWPZuughbxXFYX3Wq3GQSc4hehFZM",
  "key25": "5Kt5daMpdSZ5bkPdhr6i7h1rkDDgghFaGyPB7T64zTqtQYn5w3KtmxNgCJ9hf4PEDZfk7jQM2hjMLEFQAneLVfFU",
  "key26": "Szm4Yrv5n89HB2QWUH1E5abnmSKyzJNXgFfLd4wkbHykcvQmTWMKXabP7sXrXKzRQopGP4ZdHV2Ae72h7MajCjR",
  "key27": "33x12KVU54tsgiJxvYTWhjDygmwvZfr8KbSQxoGUhezc8JxG298qqsG86V5W7BrJZK7iBwaycNqMpMMvJTkE6jHy",
  "key28": "4QuGQHw3LERprAdpMEM1KioPfZNPPBBfcPTPmwTchNyVbrNUZw261dQ1UvsxFBYymAbba1tng9VdSD6vDD8ac5K",
  "key29": "uikqs857RcVEVwpBXvECbdJgCqugayt6NeVmnKhN1jQaTXFduVVdxgNVzsQXG2boz8NhoHhjUvVtn2shRNZc4CN",
  "key30": "2fdNuzDrWZGt4AxoysvfiRztfPjDjzYKXxnesY5YzBdHuQyYmwCNT7wQKSbPMTjkJfzcQbthJssJEFw8sg24aSNT",
  "key31": "hP8dDPrEMfcLwYffDBD2xA6Pum2rhB4YpsaN68UKbiteYkXCuBSfXcoSaHTzfDJcbPUGXG9DwYVYNXpJuViHdkG",
  "key32": "3N2a68vBjiqJQFN4KQgfizkSUDLXRHAsVdt6iW9ehkqsMtSkWUT8VPvW3ueu8WfUKN4nWYpHD7iRrMcYUygbUmQr",
  "key33": "3kzSSqbS6vsN73R4zi863fnmBXDr8uFdDNRdE9qhsjFBSiYQjrdZVyKyW62DzvtbqjY68Lgy8rQ4k5KXDjYJ6koq",
  "key34": "BArgnK8hgytELBQcZGao9iKsPFD7DQVubG2pCJfT2YBTRY2Zw4Ft28SN9pyzZGkRq6WJL2kmwJwUTFycAmAYFXP",
  "key35": "74xMVaxuE2ooG6afYFp626j4V2F4295EF2rjqFfGqafMnLdwciCWybZn1U1QUSqr5PqjdG3vXFUemofEYMVnD3p",
  "key36": "5Nuk72C3iaRbUevAkJ48MuEs49deeVpaJ3G4Q6VYLRR4L6mo9WyCW3xuB5AJgN91bHQnbiz4gYFDwphgeFJsApTu",
  "key37": "4MKrhCjob9dE4EkViSrRpYq2o8zWucqrw75JjzLWhXEG8kpePkDn9aAtx4nJMzP3UhdpV5nxw7AzBWMqBnfAPjCd",
  "key38": "v5wwnZQVQP5QYgfytKqyEb92ZmPzEmwjPHgAK7NoWM6741bSY73oe5wLrvKqbxce3U596STHbMNAinKvVZrG3wV",
  "key39": "2nDRruakWLu5Waq5kJEymLuo9dx65PanQ71KqdbZwR9QZY7JRnsJP96ZcS9nmJvjy8e69k6i6nSTiwS7b8VxYMgq",
  "key40": "4A7KehWA81d6w64iHG6uy2KxsmYckYZhAPJi4fqMVbt8ybhEX9W5hndCTr779Zp7zjaVawhpxrdbft3xyX3yrDRM",
  "key41": "3ZKQakevSyDZPxwjnAuK59YvBUSUCV3to9GWHmwp7VGrD1eg5kVuF9aUTLWetHZbRUuYE3zWQtuLGxojmNcBc5yq",
  "key42": "R14ECGQZQtEkB2PbfKXdGQoHDW1zVoNfPS53utX7Pk4943JTei5Cx3VsgorXQTqL45u3e1bcBMZzCQHKETb6M3G",
  "key43": "4p9aR2LdnwwnrJoNNiYDh8DadBzFoDtiEG2qMez6a3Ymgv6ABiFn8F2LLqCJD8JisQKrSgHEqnsjev2QZA6q4LXw"
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
