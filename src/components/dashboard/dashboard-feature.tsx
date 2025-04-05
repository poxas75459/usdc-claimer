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
    "3opCqWtXPTkAjS9RJmW8fQkHhH7AsJR7tpVfwWRJbcrSZPEYBff4hLamMEfsz6r9XxqFaqyrkGGfLCdJtmjrLBFw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Hy3BdvRUXLj3dxYwebqzGAkN2e18EoGpgrtyEPxxyXbWpTgsYKr5Nxwof11ci3jfUpVUSvvnoJDKTZ5ykDmjHwp",
  "key1": "63qtXYPdZEbVqsaSAp8n7ff7C9da5NSXSW68xGLUswn56TyPE4429YqD9Y1RKSuuQNvsxWSwv6H4GM6iBsBxWEtU",
  "key2": "DW9Ykm5XY8LPL2XyAy1d7UxdV3MnVScbjSY26oLMpw1GcqjHRoaF73hcc2zFKAPkgdpcoA7FMKYgNKuN28tq9JT",
  "key3": "Td5evmgUVosJwGJd26KFJZUq1hdRutsQQU77gdyu3vXQQqwwdpHffuEJF2jEKMRrjSTRjYHRAtFrt7eAWSyjffV",
  "key4": "2roZ69c7QjUzFSsEcmW3DsSPbLpMkDsg25eaAFu1xd45xEqkMycm1Nw5FKtXVWoGt731tg733yq6LDkxrfo5rg9R",
  "key5": "3axUjf51s4Ppk26W8UJnTiueLJKvqaJAU7uwn1APzvZrDzR5ooJrNqv2B2XacLaNgjM4mZM5UFGpfQ4oMp2wnN4g",
  "key6": "43NMsNp3fiq5RDineidjRXb6PguNJ2ZZwsSyW65GiZJUACpQhr9S7djmV5grfp6ETVRLHszX6vM3VapGNQhccevP",
  "key7": "56KPobQzkamP9ts59DdbTkLLCLn8FN9HTNGqfaS4CuovsjoT6VZhPXakxsM8S2KWWf4KyqXbWWe5fda9ZwELKEYS",
  "key8": "5tVBgZqWQzFqtbtZXF7usq9UHeFmSG85kKm6WyxduCQXNVW1yy6V4LGEYe9gS8tDviQRibciNf7CjWTVnZYEojgh",
  "key9": "imyEgsG3ZJcCPXEsLQLQfx1ZDMZ6wLyp3tdjhJJSiERS424BcvBGqVLxeRsn44or1QYYqY5iYQYWuTLnVXoiZXP",
  "key10": "5ChdSbnf2gRxJU2vJRsNXmf3BWLpBh4Z7p1p5iz7SyJx4NxX8f2HEotSkDCR8t3uxeXuotS9zt9cKaWfffKwyKEu",
  "key11": "2vPnQo5GLZJfKRKDXdVezAFCKJVK8YEUYCMQQVtHi2eq9Z8pZXPnWQj5rJ6pq5DqU4gDM1WtCisV98jS94FmzokA",
  "key12": "3SR9bMUdVP3PcZmUvVXdafwjL6p9FfVDwWWwvnBg6XkvXQJH6bYUE5ZEL33arfsMC84fhZ3aiuPwXdKxdG3apwQj",
  "key13": "2zYu8ePdfyA25N4SePhmHSdzoauyYK6CUzEBgB7Jw1xbiKV5afdMkvGqBZLf6gr8xSh3fTGvWkuioVwwEsuakUsg",
  "key14": "36ESXdiL2yC7SJuiVF8Pite2YpEtBVeKvbNSy99wV2ETARtgK9TbKHzYB4ximQGPCXeSZPgBpKAcBzYE9JhCSwCC",
  "key15": "Dx2RECULxEbgJp4XNbMaY1YuatLJKqYL7VoEFG49d6bczeKLCXk3DpDmq1SevNuPCcz6SnSupWnPmEAprweEdnE",
  "key16": "SBFZ75MekHLzXqibwCBtSJTSsf9HwAVvs6QQ5fTBWjTwGGm6fkbewQVFsbdzGsccK3tbGYzj3VM9aQuqBLX7Rij",
  "key17": "skJrpwpirH3AgTk7KT97ZP1EysSDXRzixyk1mnbGZQyiGphkPiMSmhsqEF4DTGjiAg81kiSNn5grrxzEpCUzxXe",
  "key18": "PUDTs2yBtXfEs6XKLquVo6TBLZzhkmYPsscE23y7hdUk5Y2R8PwvZyMjS3Hce88jTCNTnDCBsbrLppNmx1LSp2n",
  "key19": "28se4Xp4rXiSh7eNi1WFHpDByXY6qQLbruAftifce97AQ2sVVhXX4UL1BafM9Md5HQjvHh4ccesQaravbweu7h3W",
  "key20": "2sxauSbbTF5NqngUWQKkmUVqsj9aAqNVmkB7H2Cw6o27cHWdPTqWdBsisVqvhf8uCtRvXJ2qcnxsU8BGjvQGzgrR",
  "key21": "5yLDneLwTGvx5G4GaNdG1ZZJfaZJCMMQsdpA4RTwNqogXkyFWByg3Xcc8BjYuyautDSBqJ219UtXq11x51AcYMoc",
  "key22": "5vPrhRoufYFUG5njhTQHgG4G9D4W5u5F1FA86WtQaWW9bHbFhSpw1CiFxfY9ugou4i9HiVgzXhby9uLSpthzYHVj",
  "key23": "5PcCzsox7pUEzzWtKNtM11tNWB86UcJ1T8EKZXxj7su6hdcvxtoR8p2Tv7PNXEBTWea8SyAVdsjqZyR2EbuYNN2D",
  "key24": "2g6u5Nod6BGJWkXFNnhxyKyNiU6YecnTT2cz5z4UdmwAU9d6w9hTfvKmPSfys7TtkgBtShvPFQYb5V6kktX99hwW",
  "key25": "A63DN8qhPBKh6jKF5AXwuEVWwifyUJ9SnuyaMUNNZ4ySwbzyhXoLKs3qmoegYEMN5buYQ2aHnUpfee3utbBXtes",
  "key26": "2xVccFTcdXBfyLRy5igm3bMFLdfSE1G6MMg2DDmKvXXqRkdzRnKZ3iTTg6b1hDTD6EaUvnkpz4i19HHfoQcMdi6M",
  "key27": "26BG25Zsx1CLMvKsrUiLcXnEmBHqTWtY8i8WFiy11SsosyBAk6vJA3hPrtcwcZTepKnZsajLNDcJ6QPeQwbADniu",
  "key28": "3h6ECRRjBYQhcZasNhXWfsYgNZrHSh47LXrhinduKibc97o4E1Cr2AQ6ZtEdNUT2XSLdVSrfPRjKk7gWyfsp4hNQ",
  "key29": "A9qxXpHSKLXBFhCHKZ7f7wdnaGmc9vLiE2QkTY3V5VXpgiZdm2Wem4PxbohW7mc59iY2di2Mnb9nAQVhs9gkiJr"
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
