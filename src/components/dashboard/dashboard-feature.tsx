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
    "41LcBSBqLopRtKVrQRD3Wva2TD2hyT2k9S8aQ4ph4AxmXQ5gzwKc1aksqia1Fan5hPAqs62QV8yJPnNSvEySoazG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eiMPuoSvuGyYDEAtpmPPUt6Ryo1cBSJWx6z4i6WHrCQhiProYzpBdvhdLZUqqPR4PtSYTAUau5HU6UN2JcDaeQi",
  "key1": "dE8jJJ1Q2h5dz7RpcsM7xhjZ11tJmno7qRYA5r5exHDwPibMoe7EdquY8LbUjA55wWWi9Dm9eU8JBDaUhbnK75U",
  "key2": "4ScL3J19PHKddGqPR6hwUHwsUDL95rh5A7qtjQVPRBjgKEXSWALhVBAR8KxJ2URfQre84ySAY2ymsPGR7H56CKGu",
  "key3": "4z3TwoM4aqJYf2tiB4UBioU7UKjzoy4Pm82BVYMsnqQjCspFEtHGw3nCU5ixebee4t3gme4qkR1jRUnVfqe69fT7",
  "key4": "2ndti1fhhNZCjcEoepEMhcGAiAcM1GYf2iW8HAbYu13VEWMCJztFjpYPforkWhnU4yJzFwTW4odMPkds5Kwvd6v8",
  "key5": "5yKNsFGMJAxZJMMZMam3yMaB3xR3NUZQiCUHckWMCre7eHRVJuqZ6rMUnjtXPda2sDwbUjNYwHBp5WMm3K3cTQq8",
  "key6": "4uTow1e6L7pbeGpn9E5DVHYKxetm6LeLehSgXNLudRrMfDm6Mjtx5okz5meHPcUScAGN7rAnHmcfdVykFsdAirfy",
  "key7": "4zjh49eFg24gpd5xfhkGMXU5amgZ697gxRyVo6ZGGSjkLz5dGGj9jKaNnzF2aNcxp511QHhKySEtmNsbjMdHVRsR",
  "key8": "4mF7fPfWKMZZfXK7HMtvEYjB7bCAwzFcEiWcDS1YmLz2KFJeuMjxx7g8TJYiPUsWcT7iNpts32jteqTBJ1ozQAfE",
  "key9": "jyDjFzVpeCsPucVHS4DrLWnbbSzrtnyyFgQmSPHjCKhyuhcAAWbpnPz851AsbYG4ABx8SXaz25zMtGnYqH9mzXP",
  "key10": "3MDvPySKYfmgPNhmW4UcptAXhsSkzeoY2QHj8NQY8BR5S4V9nEoufcDpP3YqU6tstQMWCQF2XNx8wLYExUB7JzG5",
  "key11": "4kRvrpcCPQZjjWu6oRFiTB4KLeCKuhoQRgjGcandBPPsaddYaNe7mh3aqmf3Jb5PPCfqUQwMx4vwabqUimkeLeUa",
  "key12": "65biUhW8iZa1yqFhJJn4oAYpo6KKzjjZdKNnp7mLkdRYT6yfahAhrtEjq5YBd43VHMBCPpX8Z8fFkawFUNKPphVV",
  "key13": "35U7QLNhBDbJDtMqtL9uARMPEzCkxQYfUmwgpNSQ9QFWstx2Ay2Nxw7HfCs9BVXC23Eb1WBfcqAT3MpvzQFLTpxa",
  "key14": "4Nw7RozCFFGoze1BgeHPGwvsXWefUfD7Sbs6iE22nnMyLkCiXHSCBtNTCDwhGDinmUPpj3JzKoGPCeigZUFh7pGT",
  "key15": "BsbbD8E1dJu8x2gHPQ9FRZf2EjftJFQnQPTgno87c4egR5sHBHM4RP5B96exa3bQNV8jciyi4Ag1dmfNb63jck1",
  "key16": "5ciZ9PbHYyr5UBrp5h8taBe84ytxqM7LRr2outS4fMno2QM98NAZS1VWoACfSKRtvdE9YFLSrUfkhG5k5t6DGC9F",
  "key17": "R6KEtZnRahkmA8YefeLCHpwtbMMUUd4ZSj1YvTTDnmq9HT7fKczmH57sKyrEFFRrLmjKxLBrwfrBmk9BeRf48e4",
  "key18": "t4oAvxzNuhxuaUoXRa32oPWENHwdmFQA3NKFgZ7t48g7eA1oubv6zycT3abvYf9PuzeNJp9aEbek2JWssyi6rvv",
  "key19": "3AjJZjntUch3oQhripYxtgU4DCL5zkTteEHciaJ6JLtZZ9VCv16QhhafYrtNTnrcWKhDx8zD7TuMutnzTdMjMXRy",
  "key20": "3pnBmosAsPrWncrQqoJZA7x7HpMCAATif7YULHGqewXJCgm6tqdmdrnSLVE5qEsEgTWwWjmzpvbRSpA4FTp8KKsM",
  "key21": "xWRCCe8Hf1rUQGd2ogUcnR1i1aRCfsqThT4A1qvwHZFYRdvHbks5NaYbRwcjmekbHnsWebLsMBxzgNinct6gJ9F",
  "key22": "5rjQU7ZsUtX3nB62gzGemS69icdi1zSXsrURUKuHzMSiykP14mFpizg2ZmcCpuufaiHDajSKmHW8F34vvUPnw2xW",
  "key23": "3o3jskUgmHgFtivFTgvJTiZeBNL9qNNaTyvaxvpAuwSWxy76byfnm7udwGpDWktfutMam8rtVjVkxv5cRyJTjkcz",
  "key24": "5vezGYBQDfMjgGRpEniUspnRn5xRXXAnSxdPrLvQNc2Pqh5VEB4KEv3z2JMfovkSVFW3RcWMcZ9Pr4tqwcTbZqBE"
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
