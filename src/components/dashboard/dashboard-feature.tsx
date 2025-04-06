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
    "3SGgoW9RuRKtsNk86szjztNbXRUJN91nNfNNBuTMmiY1eSqXMhtp18S7dvb4nPdaC3iuZhb2as9JLAqf5qc3Uvct"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z1xTLxFCBTYQk1QtQBrseHts8hq5ZX3E6VgHfH1DzbVVYxC1kzajUjyCq74AdKbG8VZgKNJSDgEUdE9swZxkDiY",
  "key1": "44gTtmv5jPnKMYZ1H26T9sV7LxgAQTCjzCWNvWfTVdD53UjGkVfHSuo6L4d2sQXX9wsB3cEmvLkQRox16kmkdqua",
  "key2": "1ixScUnYkCx26ei4NQj6JhDSiK5DQVZGy8ESvGu1dqVyZk4Lx9zYmD8fijdtdrfMR5odSkLuFob3cFvm6SnQM7t",
  "key3": "2zk5uM9eLVJ2J7afU9bpNAZT2BNQgmnzBW3yHdDeSbhA4oHR9cJtwkcjoUoCXafjuEjFLkurmJAcfrHsoBFUmAno",
  "key4": "2tXG9t6hBiWcPxcbhFDVAD1FLE2PzUu58b4AUvFnoG7bNxCQujfHjw2Kecnb8usA2TsWGKu8JSP7fDTB3EA6BNqe",
  "key5": "2mPjmhi9tHv3TD2uD5cLN9ihZgx1eYRyFT58KKqVBjuunjT4zPW2igAhAt7SeFdXa9ZTPySqkgTcLazs5pFzXz94",
  "key6": "2u41SLppoBgGGhqkg2113DvdhyHXCcu9WcoLgg7QLi8vMsHKjg3j9vwvDCvHsFJBct4181EySBJfxrP23g8XMzgt",
  "key7": "4Ehoo21CgdNVt58B61m2E7bVMFZvh7HU6YiPoYa3kL93iMnWzxyij5SWKk4r9UuwDe8n4CoGaGkJjK3rgEC8ijZs",
  "key8": "5rPSjGoo6nmaHreipHe79X5LQW7GZh3bd8zgLiaRkopSCEenvHamCmo1KKZyHb6vR5C7Epp9CtVvb5o386zdUJkL",
  "key9": "xer9mrdAgirq8qub8v6igGBkF7x2Yy2NxejpSf2RfpLPnET4JgjAKWdF8XmjKNp9KujBHxCSWMDPDkKMBjBPByk",
  "key10": "4CaHYVVsknJG8c48Gv7dTv5bDTyyigG4K1YkUdPMmeJtgNPSCq9TyGqG9kpbsySga98f1CGwQdwu14hUTvFz7eD2",
  "key11": "2CqXc6b1nj1QqX2JVazjkJPCKLWsuKKhnVkg8Vqrrndd3wEmHV8sqxs4k9QybJCbE7ViVda4mGfM1EPzgkF8Zt4z",
  "key12": "zf4F7vrPKoUhHRPe3woGnJvYMwL2Q4znjfcZQ7dLe5KWMWmXZ5LC4ruPaaz5THKHsd2EqFSwQJSAZrY5RFjUpRV",
  "key13": "4PRcXJgzeeNrsjgVjNrmFLGJFdc7BbuKHzEQVtwbFmSdrMZpGFjovjopL86c79nteQiwZw8oayLpX9gxgMfdGqwh",
  "key14": "4d2YhaULFsSjjRVa3kz3Wwt5uUPJtsKbGs85jfmzta4rc1n5DMwf2JzFUunhtFtvKSvbDKpFXFnBs46sxB3dZNeN",
  "key15": "CDV9rCeibEuGSCg9XPHairoSRR6258UFsvxFMpbvAAJkNSBYCnLNt8djnH55obaWECjUhvfVo6PRv7uCcvNNbbT",
  "key16": "4ezndTAX8hEvSRW52mUifwC7k9kvKNe5M5b2BNDUS742zqnzg6HZFQZCdmWX5CP73iKtELMx24GYcY3gu6oPg7Jy",
  "key17": "2aNxiCEQyaNXovzzEQUZVb46ig3jVPS5wgMDEpf84Zdbe5xS2qDK5WGXkGkFfd2Jmo4VMcxMNU9JVnsZpsvsvK1p",
  "key18": "5kpY6hBnEB7cZwJ8DgFPox6vES64ZQAiKSmr1PNgTSRHTSsUCs2WdDYVQz9eWVBQKAL6wdVkC28tebLH2EzEXuW7",
  "key19": "32m1tn8umWUo32FUp32aJpVX56uVZ49PmTqfpyH7TdugLPXMwwXMLe2UnHCJfdMcGCLtovmeychkfphgmhVYvFU2",
  "key20": "4ULGkMgHkeVzXaWFgHyR7NjrePeBuUzqDt7ph6ZDWRH7yPtfQn21Uv4KmYFuyv64xj3KeCACpUHamrjC4qU76yhw",
  "key21": "51PWxy5NQohRK58Kv8tRr6Nzhf2T3cDKRwZTfUww6DGM7qgDbPidQsomFLFPkGqPbXdTgMTtqpnDB2NV3Qjhovj9",
  "key22": "4ijZ7MfweNV7p5P6hskkU6NjZVG1wESHWAmgfcUALZHx6PH8E48YHSNeQ1T5PHQe51dcfYQsWRZBiM7pwYbrKYLn",
  "key23": "nYP51Tjz5PrBgZ8utgEfJnLu9Bew8528zKfsCMkEP4TPPbjttVoTD3AgF2CzdsS38wFDYDkv6FizLqpAaz4LxuB",
  "key24": "34D6zKi1oKZYbTUyCX67Pc6wHHdmNep4UfcN4cqKB75tfbUmY4wydXXY3uqaStkknWHXrRvicfG242UVvvBMfAxT",
  "key25": "3YcoAvBoB3Vg9Vxd758K4ifg9RA79z2D2xi4fECLFA66E9sXGRFEcmumxX5HeYpk8xQctoBdYmkKi7kgxoQWvDqu",
  "key26": "odc1ShQqicZHFTNeJbkaWKboVqn5mqUkmK1bthjLjutXJix5TLvpkqJ86kf8UDpc9dMHBjsVHekE9MQNYYAm9Uf",
  "key27": "3fTtgZXg5Cr8vabMwebaP1UDYsD7grwPiMzFmF8vxpNDnxpBumVhYoyMfeTET6ak5thcWwhxUYg9szof2rLbWPnW",
  "key28": "2VZQnGGxNFVXWU5bVADugnuZsr8yfwRhV6fgiLXbWwUBjx7dX1suLiF9xVTTYvH5bDM8XXVfy41zQCaBtEDtGcvm",
  "key29": "4U8KZ69gMaq7GtYTPHTSFGHbbmUpTcPQJJoL8uDYXiQgVz11ku7UdvrjjxZzU3dMtXdgUPRjht1mr6oyWvMmeapz"
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
