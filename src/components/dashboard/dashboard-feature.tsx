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
    "Nu2RW1Mmkg78EhTxT2SBQ3UGfxaKA5WK7zyowYx85g9vsuYxGDwm6ghFKfVAgHBRnafhYghnpKh6WrEoQUJ6PCk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8DS64QLeL5mT6NzRiLYL3EAajZRYmK26P3h25dG2CviKVywsjEKM2mPLTJZLNoh64tkXnqG4WzRSwr1E9A5NMxt",
  "key1": "5eDsnLFrvKfco4pHQFQmREkW96EdtY3TWv8THVpS6wdMLiwbV5MT3Rfk7mjoDSgDtsSAqZBvVvimoXRSS6tTfAsD",
  "key2": "4iUa2CkYQ7EbUVu767M7aViUJNExaRNESEkXxdkkDxNYme9zpVEhehJcgXZb9TcDKUgBgZniHmnLbCg4Di8rsqH1",
  "key3": "45y6Wya9WjpTy8MoVrC3ZLhrwQF2MRhPa5uf9t3tkpYHgs6XrJuLNASNdDxHQPRAqDr98iRny17Wf7YbcQg9DxwP",
  "key4": "2978ULZbcjvgcLBac7sKbFV2cLV632c8tDRVmML6QncTti8dDyZSL6krnHtY1KK14ECnfhG1xRfC2J5HSmdxFuGS",
  "key5": "3QhGNXRNr5NxNDwFLauRiA3suJoaWeZjCAXCgUi8S8Xha4XXd5boCdFNLKMfMNkoPmVu4nhBKqmJf9kCRzmCp4hZ",
  "key6": "25YsgDHPn68AMpYyFNVnmCH7r4AVZrsuN7ZxttTawV6mDTt9eN8XboXuonHCxdvKBu3nWF8scb9eazrVwZtHYJMu",
  "key7": "3E5zRGMdg2Wb4aRBeN8cozMLmjk67y4jEB3NJmQNKV6tSsuJqK67QSE1PQ9GaDk6NARu9nZGpGkMqu5SKFui6epj",
  "key8": "4Z5z9MWNpvMT76YRMZxyyVg1JSChuX7o2mV8S4LeHaCkbuzePMjfhV3ZSAEATAv9SsqhshiE691QEaASK7C4ixQf",
  "key9": "5T92d4Zyf9423j9vDn7UphDT4MJJAmKTv6UNJfTqoT8zYc8uzQYQ8JjeGnxGwmcVH5PXxqQjrcYjipnCFfFAuPty",
  "key10": "4oDHZbKc3KrQMuPyzGLW29gRtCbQBPVUvnpRhP56utU9goy46DtX7BJB8HB2pEq5Sq1Uyrsig6nqnrBAaY5Lqwqg",
  "key11": "3hx1thVzTQ39QdyENbPpeUx6jsyFkSWe1b1iZbbL2mxcYe5TgJXo9XU3fLprEs1QRKTAvcgfxxkBB6qyntNtKXp1",
  "key12": "ycPPzGm5vFXaEbv1vpz6wEh4iyG6TUyVAceiGfK52LuqsLybTFQY6aqqb51y1TEu9EXxqiC568zpn6QtLmZojmY",
  "key13": "5cST1rBR2N3EV2ZvCj4DkjkVUqjNDhKAm1zu2bkVQfqPHEqHdCsXxGWAorWt2sgr1SpxrNFub2eZ4N8bFHVMWs7R",
  "key14": "5wwZmDpzN1ZMpkPMA4AsiWCf2fbbdZyTnCRsnfLERnMVRtCwgYS4xR91Yi69kyb7Dm5B7m3PKngcB4D2auMZJerX",
  "key15": "5vV6e1rBV2ET9VbdL3UjjYBAxWHpqphp2GbeoBWqVcdcYu5KimhLDWDQBPbrLMVMersAJoeQXtQ8yy6m8CXLvUKs",
  "key16": "4irFjBcG5gSdm18eZqaoRsN6kqUX6HwDnjhDfLDCDJMK2LY4sumutdVpcYovSk5jMiAKEexXwFP2PA7KzfU1vZWA",
  "key17": "5TeLz8To8AcrcJisJUA32vxRWrE2CqyDpBTmJdXZ35hGjLiYgHzeBCgqDKvsBcGcqaQ8BYp1bGdqyqcLDQ7N5Gcw",
  "key18": "5QkBZxf72D8zXVdqhBSgu4zy8opvGZA4Egh389czGi7REitPvDmExBKHx4GiJRDJ6Fut3AbyCv9kyBMTbTRWBHzx",
  "key19": "PH7b3kZTbKy3HeHPRCv8LtTR8NBS372QH3X1P3TMQN3SXWsbehpz7K2YeCJvG4PWzwu4yhPbzbsm162SSQmM3JQ",
  "key20": "FKduksrgP7LT8Kqppynd1a8LNvr3tddeT8hasPm3XbUSbazyxZso4fFLWEdGACtahn1332LN7rXV28jKa5W3WFv",
  "key21": "5C2Y5iL74n7X3Tk6PghkDU5UJirPQqQWseDb9LWtopgmcTD1adB16xXxvJ5g8dB2HG2Jc2LHDeLojmtnoCLa39pr",
  "key22": "5CrracDTKzfn85x5iCo5sUcpQ7s5D7xM6jRPi8WAKEERm9ATECVNoTKBsdHv53AG85qU8VrK2cmGg1tZMYMzwq3L",
  "key23": "2r9YpEyHimA34NVbZq1mPZcDfc6uETwcYNN327jY1bB3bm7DTbg5EyQ6fbUMgBQYYw6XeMJmFCXUiuAxSnGuo1LN",
  "key24": "5g5d4KfCLrQUoaud4rGhxkDAk9UVoiooR1LsMqv6JCe9DX2iDg95bSLku8Qnms8uQqvQS8ZZz5pJhJbmGmmExrDL",
  "key25": "4t3ZqHy1diC2p4867c7Q7Kv6U6bBsKvc5Sx9BzapxVLbHV2Bu4VVsQughR4Wb7j5fUE1JfnH4B6vSJC4x6D3rkbR",
  "key26": "3878CKDKhq8BjQZ8s14bDMRs9b5nS1tXYEQqbApYDJBJXTJi87wCGXUCcqAJoFm7pB3C1tNGo8SVCSV1yAwAS6uD",
  "key27": "CqQuzkT6dRaoxCKUnYRLDVsi5XpHweVHCcZkqeFeF2CvQvGhLVwkt7rLPt6FFWGfJWhFMyQPPkXtAfpYkzbSKK2",
  "key28": "3KyxvkpvZvMZBfHKwEJnHmmAsRXr5ZHAvaMcPF6FyuoVH7bY29odd6eYgLRxmgjK6mggZ3KfbNs5TyqxBES9gzhq",
  "key29": "2N3cpum7DddmZC3tqc4ikcu6C2Zj55UXpCvchXo3FM9PAgxho9RBm4d5zNHrKbD4AFGhfo3Jf8UR3iFpFa3jT8LF",
  "key30": "26vvwTWEpDLz97NMikcD7xT1b1EHkaLGLhC2jYKhXXX9qVshYtsHstUsSF5VhXqp8BAets8Y2i8EyuUz55ZBf8XA",
  "key31": "2rEUtsMwdNedoU2kQqyNCTBrem7iuD8iBSNPipgpQfTL8wDTFA1jkQcgr5PATCZfXh4XVATV56NV4pTUEUzMhFTV",
  "key32": "2p2FGvAUoma6TJjPSf339GAebmWpggZXXCYHoT4KXzpEcGB2jQkFRXM296JnZ5B9H1Ut8auZy14UfV96bHp8Jn9w",
  "key33": "5V3PrZaXMp7MFq6tANfET5Xx7aENbPD7cJrXBnbmtypkDvgW7Lv2Uq5eM2p4b1KXqTPWtsnaL8qc29n5RPFgpbQ1",
  "key34": "4y2jUQDYFvqo7sQAnfQSiXs1xfZxfh6fvnExaB4WVDnJPQYMtYTtYGYajHaKpiykD17dcwtoMdPzRvjHs8mc2D99",
  "key35": "4BDfmFu6Wduf3VJ7xbFAS8xxtmGzp6nwWM4ZTkqrXd4CkARnbmV5RbuADVU9eBfye5HNVeGwkShUB55swVPifiLV",
  "key36": "67JGkrvoNayihJt8mv7r5jrd6NTQp4S71srds3VX7aRV1NkNmavJ4KQPidkujJiEZX4b1mG6P8L1NvyZwTKJhF62",
  "key37": "5XpVM4ayUwCFtEUSx9Tr7WwFrVj56j3B4BQC9nDARcAdmthkVbJqeQ6VVis1Z9xjpwdAMAVmzpnvGcWgQ1aM6FMK"
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
