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
    "ySmtvk9RnL5XstuMxuop6WvLcHr8pYSRjtPwXKE7hcMEeR7wLky3xJZfugVCf9LNcKQoaXPzZVf6knhHWgzxRjC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V664Kr4kSFWdSq6HyVKBY6XebzN2nfHNn9wB6WiTLFTUqaqPiPEXZMgUexYxKQgnR3KVfaYj8knEuzKWPhmgfRd",
  "key1": "2CTLC4HeiuWBbmKNDNUfttqWBnGnLtpWJBbyFnX9Gb2t2qNbm3qXMnv5kp5HqKCSAxnSkba3rZutesEwpGfPd9g8",
  "key2": "3FqfJuss8P2udaBMmYiGkXzeh7YGtvL3tC296etGW7NGpZaEPCXq7Nsq1Mf33SrsHJ5MZSdyLZtbNovHGY4NkzbG",
  "key3": "3mfMG2ML2i2FV9YG8WkGmzHBzCRYgX5Ede98gM9cGYuUrzKasKVCdVJgNLEEScQNk4YdXMB1ginusPENCnzeZiqE",
  "key4": "57sRqPgSYxQ3qhBZYX3Ute6tB6MaKkTkNrPN3qzN48Jja2nM3yXEVtvbi7e9v5auikdBGZqwt4zf5iABPBefLzBn",
  "key5": "4WoSXKo9TzenAxjYPvtHi9W7oyE9ep8L7VWV2pfNZPL157phZkACVbP4eWroh59ZnRjaCGAK4m9PoyJi2X8mEetW",
  "key6": "kQA14fZBy3gTB2HjdwcTDHLoeTXS5ubukzhkDhVmRSi33BMDPe2mkXDDdwm8XWUtomgDrfi6mc2bdzchHo73fqt",
  "key7": "48rGSx3FvhqBLRQGJYR98DMA64WNwG84HzsKCVxMU7xa6RiHgq6JXp63uboWhaKycf9LaMT1hZg8xcU2FDzWu1n1",
  "key8": "5TEWHx8tfN91DxfyeCngWd8sbwutfjhFEnfn32Cb9BwmR92gKSbPzdKYYHwq8qPmZM7PogDyBopPR2LzMaBwuKH4",
  "key9": "4AXWWp3p5vuSDCp7E3mC5DwrFCwpyfqsRNfkGXixKSXDPvf52QGYhuHmnGJoF98Bw7kFNbiEDMAJetWUFBQxgkR3",
  "key10": "3FusQzL4gMwjBDSirCAwcFtUob1d9SjU516ntzoP67z2a7gdjCGWunHX6ksP39EHepSY84hJUavyGiGxpKybem7u",
  "key11": "65ZhLeuyMhbtd22orhAayREox7KovT6FXiDR1gpR7mLXA4eNSf9jfv4rgHNsWrSg9u65D6SRj7vAjVurTGCNp2GC",
  "key12": "3yGX3m6KCEJj25nUiFdj8JbgXF6x3SsCJbQNbaGdtss7p1TsBemQq5Dc8vgbotUQbeSmp5EXJgYqvp4hD7ES9yvi",
  "key13": "3mUxZ7KjuDRqqosiFZqKmK28x2T2oWjrU6ujdiCoG8eyf5vTKWnn9frGGUZ3H3viHMy6YdbEFsS91TXkeXoyyTw3",
  "key14": "RY58SvmPRrrXHQUUxRNTYseBf7zgwV3dtZkMG7ckmdcNrjWjkaxuR2eTUHmy9o6xVbkPTSGtBNHyvtqXdgEAmEQ",
  "key15": "2QbeZG1vRynKZK2aHKd525gXRUffpi6VM7MaCJAEHBqg1TiAE3ETeMStXWh1DgPaAiuShhWXjKfLQpaqG85qtttY",
  "key16": "4QYRSNVwZrZL5AFb1sD3XioQU2E1fgsPpWfx6ofWANVxcEZLvuQ7ss3WpgAedGQDHAVcTVGeAjmFCHhF4TANWHa2",
  "key17": "3aMSaoSrA54PQMkogtEB5fzE5B2MKEHG16wRqU1VioGNE7nkQiToVJnnGykkqrQxoixNKW1ygSPTx4uYKNy4Gygj",
  "key18": "oySQRJ6YiLAWvYu9ttp3sUKrUbSQgLRx8Y7tLvg1EDb7PxSsS4FJhxKGZxeP8eUae4mBMh336bUvbWJvW4Uv2qm",
  "key19": "2dnWmxgdPmdf6VUHi4AYoE6Lkp5wUwcqFPts4GHyWoaa7inpfSpWBJq8hpiTJcJhU87ewLPLPUeYHNJJbFs4qTAh",
  "key20": "4dLw8A9ZHWeRVv9GTXZgsqU753fDGsnWv997T6B4cvHvGZML498Cv7Gk9nme6k64oDoLCt9v1AmYb6BLQZPzTM23",
  "key21": "3EPR369uNSqfoiZ3Y6CodNxRUJtuvvDwspcs8hXHqQ1g35APsMgTBRSrrSA6iCjKN7EEEEyauubYbgSJCsZcAoGZ",
  "key22": "4zN5N9YQ4U1Z7EkkpL64a7gsDxpbw5QoJqydcmB9N9hWrD6zDtWDZSBSWGJY7V96ftLXPBnwwpggFDsjQKkmSBPb",
  "key23": "4Zrfxkybu5kR92ux2yUcXA4fqzzFMEcxK5aBLFKZo6R93RRxqQE3GR2CJoW8UvLWpSXKV9MUj3BNTLW7H4hTW4qa",
  "key24": "2EUgcAmntiMkysCvxwDPf1TNcAk8EwKbC1vT7tCcnDZsSwgaVAUEhi9WjmmVVSkn9LU3oLwXhABiQmwbsfzmUK31",
  "key25": "3pZg8KhqJFuymmTgTwQiFGRxEpWQDGS8poKmkvu7S8aJeGwXqjKYiAPtb2Q3uV6i9YBq2tEUBfaQgcx3H8TRpJEV",
  "key26": "5N1px5SdQ6U6GzGNoE3TJ5PEQwudxgef5UdbwqqPfx9sjaqbY8UFV9NXLwgaqfRVjJbGZGvoB7seiz33Hdx2odvD"
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
