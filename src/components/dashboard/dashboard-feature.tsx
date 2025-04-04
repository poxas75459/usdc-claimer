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
    "4Ka1wYtkdrFJJ7rrZe2S2wpBj7ecSf1KYX75bmfkBrU7kyWAJACQ57oCiDV1P88T3DgzPk9ccZNCoYP9CgzVv3KX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z1cgqCCyugAuksiJKZ44ha2y331BqBVMELWHbnths1XfWdeU7NQzJ4P3C3H94e5WmDnh3RBbSHrMbxvf51GjCZg",
  "key1": "5FUqCC6gPH5iUsM9teVmssnN1hD5eJYoN1wTQUv2PFCjDMs6DaCjdRdubvMznb1qWop2J9LG3UHwNiMHyxoMiL5r",
  "key2": "473W47FDYEsUsCuw2ZRyUpSSX3TcmRYf51wXmu9bw1rvNdoy4Ta7Hca2SSgsrQqnve2FgkdAmsnUbjw18gfta5og",
  "key3": "3w6uSRpLMxzg181pMunSg3NhFBtEXeFxbuFreQm6Zwrem9KB5AvnRUhTShPecNoH9aJ8xVGatRXng1Np3YDopuxa",
  "key4": "56MxHiNXyEhHzu8uUFAH3kC8DLS6U6bLb3ZtPod6MiAHVFd9a3TmaTJRoeS4oRLejae12x1kJrfiCyGWAKrHicd",
  "key5": "4B6a1PVx5CPWztpwycwqCKEA1jg53dA4NZfwo1ht7oh5Qtj26xNPihGEuuAXD4jvfRhv5FYfLTsFAmSEdAbsom3B",
  "key6": "5xVcpm7KiDNczSDWGNVbfoPSXVY27prvsVaiUPnfXmiShSeWUHptVrZi4WD4cTmXpJkYtgCQNuuHr6HWkfQfNDa5",
  "key7": "2F8m92CiLpyK2ZoBqzjGQDUQtoRUo7KHHmfeGue3LCmZjYv77jkm62Fu2fuJzwmMsVndf8SK4psiqcd21VPz6ChF",
  "key8": "3HHxJaVHE13w78vsQ76B1533hzc8y28YRWMJiiZRnm4cxkQugJMEAT5gjMJgMYHFFXAnnnRQbj6UjPJqk7wAYLxX",
  "key9": "254ySCTMpzmASoq2TDcwpvqzAkwV1hWXYjYtsLdKyfBNA7qxPqw3Z4nisYEGqWbMVAA9JUwT5L6PYdmbqyY42ZhR",
  "key10": "26p4tgiYCDU73PFKopgGzt6dnTEUHyrwC6s9uYXXES5qMyzsWbm7ChsUXCWnhmM9nDbaPfDTDtt8VjoXyQQJnt5q",
  "key11": "oC7GbKjv1jvU5XEbiyAhLEBwjaHXEir5W5MqeTeCosfDaTFpNhPCkxwQQUfGSVQJz6bYhcZTKEZYt9F3jqGw9qw",
  "key12": "5MWvxERroD4hD8F3eroHoKfTr4HrKwBf8mb28JwrBjx5wZWckAY7LEAm6LPmnAWQBdgbKNatDedChBSL2x7WKXEp",
  "key13": "3BWRjE8p9ZGFFQd73i1DXVN2usArH7hNvi6ko7PPCvMNF7rVUFKn8dJ7VVpiQSSupsnZewtj6KbEdZ9GcAhpmpoZ",
  "key14": "4Mq7Pnohce1auAtJq6PyE4MLDGHnphSrUYW5aTNSsFveFijRUFAUHSNmEfuLjkMMbEpmpLpuSevt51acaN7AEtnA",
  "key15": "2pkgmTMWKMZFQFS4ZT8uFuGd5YNq4Mrk4rkZbgDqVfuty6yctWBfvFZbGrC1mx357SvHHE6LiTUxcztm2aM2SkVW",
  "key16": "QrTy5t55PwvmA3gA4iSoDbF4tHf2C6toPeoCMwmQJhDXAgnJYWTfhtvoRw3qerLPyiHwc375Mwk3FQeFVu29vGN",
  "key17": "4TDT9SeuBvDbH6xbtnX3u1DbcGFufp3Wz6dgpQvsBi93ftmurukAFu3k1U3njjTeSLLAcw1dgBouoSTtLtfcpKJA",
  "key18": "zUL5P69j8teq4oq2Mi8FUnrn2o91tkQdzpGktu7socWNP5UjcAGDKHg5vBfgLLHdh7TcCwC9ymDX995H3aFsvzT",
  "key19": "5j8JX7weR3WvW4yaPsEzpEXGtsyvWTQ7qqYKmTQ8beKghLkq2Dt2FEaVtfqL3tw32Ab6cdKoNLExxHkEmZWh8eSw",
  "key20": "2F9cunz3nq2Spsz7Q8mLu8j8oqyake8Z9MBc4gmwNkDn8xWNocYwu9KJRB3ujqWcnatMnpFU5iGZQRJeeBt26RWp",
  "key21": "5YHG8Zd5h58t5Fv4wBvKnuwUpccsm2DLYn1FwHcwCEHHijV8JyHZrwC6byXH4UX6L1WdCtin5tvTCM41scr9H42j",
  "key22": "5yPV7UCQ2KdJqCMs75Wp9twG1UTYW2ZFWSMFmQFYvezZ1ou5rhg4qrTjHp5NwREjHz3kGDoHTsKWy9bCuRKSLycq",
  "key23": "53rdDMkGLVBagk31yRpFktR2TohWfqfrihR7tHFUKwjNJQSi1STBM6W1sXHEDYF7Df1Kcjcscrpxgjpgi2WARRzq",
  "key24": "3zfCHhhPVu6dSWEamjbSCGwsp5x8xWt7gc5mbg5LanRE2pMYPq9M5QbA5cXTRRdS6Ut92atMDoCMCApjDtQvDrFE"
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
