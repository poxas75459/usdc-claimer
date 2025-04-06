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
    "2QFkDCg6jNA3wquPT4hLNMKNQGcyQ3vNJoUA1REDWynZXgARUQdsjn7RVdVd2d7eQX9tkKTLk3ZxHHfZENzqGUUX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t4aKW9SE36ibRvrrP3SQMcdDh93CrXRRom3KygcoP9LVN9BRGXoUafZ39xizsWaREnXAYaw9oN8cwmRZhd479uH",
  "key1": "h64BAERAYAUpqAnDSYrMnqRDY762MGyzCbdS2RZEkdB8Euffg3iE9TNqu1vPQFt5MoyGJABRZQGxMvtQBNHupq6",
  "key2": "25T2Ytnm5aovi6V5qN9NshLVNoYRxfMM8DN4U7ZZMScvqSZV11fSxPK8uaJXZFD1hBfHWmZCEd8kwbRQzkUY5TbU",
  "key3": "LP7WrEVsoLmPd5fQ7nhVhwP2mgThY41BHC2Cc5gR36t8959huJ4YeMXEXYpaXdeKaLkCYux8CrAqJmji848TJvn",
  "key4": "3dYK3FxM7zaXG6AWT3pbUL5bfESvuqHsqTxUhjiWRczfBgRZDAw6XWPfmkcjriuVa5RSm7nDnU2fyeZHeWC2PfTo",
  "key5": "3GSNvM89tY88FUAH7BRody5V6ktS7PhiAPsSw6AE38uF8JJ8xtdZoXJMsdxSKyTijDT2t9zxESW2ciSDmfSyXy3x",
  "key6": "26QcQnT5cHNUPvKDLXK3YxyFPa2CkiVreGwLqpsD5np1z2CmE1rxkYbAmUqtiVCVgPCKWsqLBHBYwwGDG4SBC61J",
  "key7": "5uXDS1yb3xHg3JeFsoz9u4BEeDNsRsyX1A71xarA7etn4esphHCJooRDZh5BNVSudCA5KWukUgYitgHxqWEXp8fb",
  "key8": "3MLUQpiQphJrbJL3vUNsvXKjbjGqGdNHaxYNkZkt36K1Xn2GmshcZFUjgiHZv72WqTiyZMikf6poWYKdvwzZmKFe",
  "key9": "3VVMdDBi9FC7MqNTeaRMGQnaLELv4nxUBXD3tf6QNwoGYgdmtCxXYP5owDCgdz5Gv7394PqhpyuQmYw1wrQutoG9",
  "key10": "2u3ZEc9v1yL4s3EftyRQ7geEg9bwYb95F1d49k8NCWaGjjfgRBumeJmYHGRdkxazLEigihRJAxGo9sCJVcVgtHA8",
  "key11": "BMsH977L1WLYYNb1nYbBEQye2h6NLJ8FTPcatbZknH1EG8ut9iZjzUErDaeX8i7ECmVEP3bYkWgyY8FiLCDqvAE",
  "key12": "2DrG9ua2Su6yKjujV38nivSaEB6qznuhA2nH4AoGGbH7NbZ4QsqAK7TPk9zKT1Zr5wysY5z25tr39jH8sqer45re",
  "key13": "uyPmQRySzi6tcpu9pFhK9U1smZfohfSo7HAvn1bYKtDFQRVmS6EAFEvmSRZWFYM7PPCQz9ZZfELDGPAPnn7qstK",
  "key14": "3wfmA2zciqNMiaBPpBpkhf64Tp2CDDDJc9CYFMJ8smrm7u18yjMnBcTvWXCDdeFm1Q2WHujNwheKoywgZZuCiHKo",
  "key15": "4siKyjVPjcyuBdwm4GtcNXJ65LjmuPEcMqqSZZpXFfeYwxvZofTLtUbHt5WjHd9EytPqQCTBGgzc8XYmJkpb1b17",
  "key16": "XDGW9v1ojDWguy144ihoVocwwZXE1M8BBjvoW2unPbaibeAZ6yWVmdhSoiSH8H8SoQ54yXsVGtz89MafwXtbwqs",
  "key17": "3Bie9YER7ESfJbt9Yd4h2Uc2soWezFtZSB3zN2N9DX6ievDbWjBCLKKCRcM2gmV63TgpZWEgR3qJvCHLNEVKP4SZ",
  "key18": "4UCLpR3asRz2Lm5qktnoAjP4iwDRpZqHhVmCbtaXLSrVyH8NzgjxC4aaXdwgMhmAmxgvjR2jZYbzbtCJWdPKpMCV",
  "key19": "NBCL9trrYTbiKEHehNWoTuGCkwgXGfVPxXxssqFGgonJcWkA9f3H43zCafkURmBoECnohYhycNVbZpnMi1xVNEm",
  "key20": "3WqXuovReNQDBGjvHV1aZjv9bPw4RmfsnbQKpxYsvkZ2osw4MtMd9MgeMcJ2V5NQZm7F4ht9PBrPrjMPVUA1LXo3",
  "key21": "3snGtbJQF1QjmiptYQXhVLzYXovASq4sDRuB1dAYPayXggHqjoRSanJ8P6MGKXbPsXTj6NGZ972ptK5Ap6YowdXz",
  "key22": "5BeTidDTzR51HJ9hNThHoqeprfi5UQga7vXiU3KWXcF6ZuKhpoUrSRmaYRyu8PA9fcvB7rwM46Zs2gBk2jnEMtWt",
  "key23": "4pXbLwGzdmJKyQnSXSvWbDYifnevxGw2orKGEG1MvhbReeHsSEtwodevGntaPSvQzCNQ3t7VPM1iSdMkJB1NNru",
  "key24": "gbYRZpxZSy6pKYb1MKa52Gp3o8ecGG4JwiVXHCa97jK9JLmKVYh5UJbxAptdqoqWEXtXKoe3CKA6i2UYfP496yE",
  "key25": "2eJ8DjtmuTNP2GZ81jpT99rabNav1igb71RQYv6XS7HDyvjU8pYbLRLm3z4pjHEHW3jgUutZczyaW875pQewkhUM",
  "key26": "TJRiacuhkgP2QK1QSCPp5nfKeoQrTEBrh9pTSrWioGiPZDCTMugrW4LzCatqYDTU51eQTY9hRQfhvGXTxjKDS7G",
  "key27": "5Ypkr6nkK6Ru2QnxmL1mSt3UiDHc3roQ9BBboi3jk2gbyH9qGG8YTj5151krP4eTtG2g1dDGTQKCXEVxMsUmGgJ8",
  "key28": "2J1LwUyAVwLJffKjjvNPW9PymAQ1RHRV7oneTaYGodb8KNphE7EJzdvrFBvcWgkvJ2za39zfWMVhjNss3v9hssnq",
  "key29": "4LzVvWFSK9FWh5LqKXwZmyMZY6p2kB94zTJrRd3RtkGqrnS3dUw6iv4LtFwJmnX8scURH8bHvr3bY9PynDJryobC",
  "key30": "5ob7soVkDJeHZb2i7ZkXt3AWP9P2t5BdnsU2BQg3ci3A8HfVbvRYMMSeqh2U74ynm3uqUXdznzZZjKSpVnYTopnw",
  "key31": "2fHb7YYHhaXgnqzchYnFd4NWbP1p6jZ5FGJuo78KXV8xnotYFE9ihMZsb7ukM91qojjwFEHD9v7VVWkjQvfqwUjg"
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
