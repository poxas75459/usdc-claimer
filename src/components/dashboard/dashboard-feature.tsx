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
    "2esDuEhtyc1BByZLMaHS4ovXFarAN3AXB8ZjZJ7h1MS1Y7yntCWZ5DEZCc48MXiqcJyjCYaHHtCTt22pktkVKZZr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cvdmc33RBnWcQP5kGNoPzVSrkBDHREEgVBpRa1U8ScqiRjs4R8uWS8N2EpCbgkVcWz9yN9MUng7pKmhKSDDiuuq",
  "key1": "VRpeV2p2awtyJM69t36jb4Zc774ExWpZsNCHGS8wSsnm6DpjwZK2yw3xCS3EQFCMJC3eYfSF6ZM5eYm5KYdpw8b",
  "key2": "41zmrgtHvHYhKNhqVKayAnFKjuouw39PozHjjeoNtD4TK2vY1ZS9wHqaF1WJZUVjmZupsDjkcxp22n3BbocnYzYa",
  "key3": "4LWjhmp3ncaNMV6QVURsAAoUyVJLDDvkN5hMTDaavHyTQh2hHsGHnoXJ9CFZyUiRCrZVsaT3q6sFtfwsYCLYcXnz",
  "key4": "4DTHJsPvbd3hjfmV7aiRTS1XYBSrnsrdzfRvKFL5KDBs1trcjVkb6usvwL93n8WGb5swvNZTd6RER9nuPUh9DhU",
  "key5": "4NfjBMbDTqzeSbRuATSa7bmXVKN4U61uc96UJsjF1J7aqy7W4LKQfjFbTVCN1zcpFzgtJ2ZBWAdcWahitCF2BtAn",
  "key6": "a7yYBLFbpRMttkRmv1YJRWLTAyLZxZAYJqEJXsGDnU687PEzY96wPbizJ5pm1kyDXKV6zHuy5Tm7e74rEBVFpeW",
  "key7": "2Dsunbdv2bj32e2R48kA32jU9qw6FbtRVCFmNNxVYfM4iNUMzyNYh5M6ZEbZVf7ERKDee3Ard8C4nxYU4xsXfajr",
  "key8": "2gee6xSK8v8Casb863xY2jPajiCgN3uxPaXsCueCdQK8caJzasG6bv93sstS8m54ybxQh3MDDBrp7DBTeQ8LFv8p",
  "key9": "3vNu6cjNWdfYHGhzuYPBki1iZB8D3BkXJgdCspGWYf2e9Hb4iUY3JozCgFMEUfyvBDwpLmTVqNgBf5cgMoRmRhrT",
  "key10": "5mZheRymYJwyvXwvWXzHi5btNGwBTyLgrzWSVi79DRDRaNhy9nJeDBusv8RSvSzwYa2LXFsfZ82wFe3xwUeXHDgh",
  "key11": "3KyPV7CzpvwgVDewndAiaC2uPJiPEuBU9BcgKzTiQhtDJNDvR6BR5jYWoMRjvcCxHLYn1uoF7yCZTnt3Jee8DXA",
  "key12": "3GuPBg55LZw5iEVyA9v12nu6eHiuzJ3ALBy8QQpvzukuedyptbeHHkWu37PvbgGYV5rmiSXWRF2Sdf2DVC2rwBaR",
  "key13": "4Z9WvzfQBDJ3hXAtUD9ksg9jic7hfwXKDYhgy4p2MhDpS9tfr9hELbrwx2W2dEv2j5Rf8JjDifZqy1MvxtR54426",
  "key14": "5fpVzhzxF2BB1Kbbquijqq3Wi3spAqcu7bCoTcYs53acvyfDWwWKSEUUukkJre7ns9bD1zw7kBC1p6V3iKy4PTPA",
  "key15": "5aW5to667uggVMHXY4tfvGGy9zaTkstPm5XM4bsDD9ggLijt7HyDoMfTxyu6LDXCAsPFQgrK8YeuUDeL7bJKiXxd",
  "key16": "4CTmoiJd9nQURSLhh9FhxMrJQ7d5vHYKZesVLp83bgj3KAvXE9v9ynNsVLG5KqogTQKURW8QERKPAEoW8UWjKMTo",
  "key17": "2bTYykCGDttxNtrKiSCkDKjLvNrCWrKaG9af4tjU7GH4hVDVeazNcR3K6PeQnk1tbFfJ29r2udNsWjWDaEtWA8C1",
  "key18": "4mat9WiBcn6CLLcSpM9sZxajq8vmk7i1LbwfuoTe5ZJbktfVbMQTP8f9zzkJL1LGTFt9AaD1GryXvwPuMpAKqsQv",
  "key19": "3kUVNw9hnCXqBjryp7C5FMLrfv2ZB2aYdRnnEewDZE3MjJ6uACWUtVjo7UMmYwVPiZZsqStEEDzuRJjCF9tq2ej7",
  "key20": "sh1rxPNyf3ZrmV6DSBH7FEdNAEiWshThknAYYBxBdeDK7fkFiSEu5ZF8fe6rHwS4ecVYGKcoXd4kFPwNCRkGufu",
  "key21": "5GdsBRk4hDKNK4pb4ipKrJQ1yKWwgqRnDnzGjgxcwsKtZokYxyqtb3VvYF9B42MeFLbVfGhNyMHsVW7jerkbUVVf",
  "key22": "fak2EiJxWeNBHjTencR1mUUJCEufwuAgKW7Z5HbTX9WyJQAy1ivb4rgWWJzijtcaoiKiK7KxXRdeT3cNcCe2pAH",
  "key23": "3KiVUrmYJ75tXUjMWZAa5hoGBJapQ9sdPK95X92ZJj7PTwhT3Sf9FWyzcqgVGSBe3UmMF46NFSzoNVaKRbeZRXQT",
  "key24": "3yFR2ji5rKpqybZK5CUeVeheRifCwCCSPcX4wcctgqpeiXsC2yvjPdk8DGPH2SoxcNjKLNGEwejKnthHcqH9x78f",
  "key25": "5cXZdnb7hPK4VjeWLWwwhdBur8mxXPSr75X83pnKVEUkyVNv1CMMu6JM9CXK3xjX4vJs8uGzAHtU32tTN2wSgETA",
  "key26": "dnUBA2VwRnUz5pAYfrKUCR19UYMK6stck6LH4HuNUNsaWGT4qSishSapmYzMVLcytLMxiSntkdCWDyRiCdvHNSb",
  "key27": "3j4kt15pQ6VH8WBVzhaTmPw9P9xSGSdk42yL6ayZtUVLRueUpVRAzT1a57YLfK2TL5uamd39pAMtZdBxgc6Ewmuk",
  "key28": "4Eqw3ga1mtpmyYbY8VrrshDF2jANNnG6UaVuYnteFX3SEDkVkH6FM5EtkcueQ2GrEdvNyN9TMM9j1AVNecUgwKNf",
  "key29": "2AmX9RKspjYNrV9pQJhVfWNG8Bhnv6eAa479bfm6VHDaZ62c3jSJN9h45DTzumvBXUshTQqMWcR5e4riobgipTNm",
  "key30": "4u6aGG13kH5o12CKgfZHkxJZDRb1b37H2536jiwMqTeauTDz6JdBM14MBARZ6TMP1em1dyDAaTLJFUMuAdkKWHtC",
  "key31": "52MvJKKhqJhsBq8tvRwWxbQuPcfse6HBkdicYsio8YU1sfGGmXtaYypbCmuZiqeSsYCV59f8vsQosZL9JrR3vjvt"
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
